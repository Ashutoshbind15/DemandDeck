import { getServerSession } from "next-auth";
import Demand from "../../../../models/Demand.js";
import { authOptions } from "../../auth/[...nextauth].js";
import connectDB from "../../../../utils/db.js";
import Business from "../../../../models/Business.js";
import Proposal from "../../../../models/Proposal.js";
import User from "../../../../models/User.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id, role } = sess.user;
    if (role !== "admin") return;

    if (req.method == "POST") {
      console.log(req.body);
      const { demandId } = req.query;
      const { owner } = req.body;

      console.log(demandId, owner);

      //setting up a temporary business session

      const tempBusiness = await Business.create({
        owner,
        onRequest: demandId,
      });

      //activate the session in the demand for users

      const dem = await Demand.findById(demandId);
      dem.active = tempBusiness._id;

      //add in the businesslist of owner

      const busOwner = await User.findById(owner);
      busOwner.businesses.push(tempBusiness._id);

      await busOwner.save();

      //activate the proposal status

      const proposal = await Proposal.findOne({
        demand: demandId,
        creator: owner,
      });

      console.log(proposal);

      proposal.status = "acc";

      const restProposals = await Proposal.find({
        demand: demandId,
      });

      for (let prop of restProposals) {
        //parse it here?
        if (
          JSON.parse(JSON.stringify(prop._id)) !==
          JSON.parse(JSON.stringify(proposal._id))
        )
          await Proposal.findByIdAndUpdate(prop._id, { status: "inqueue" });
      }

      await proposal.save();
      await dem.save();

      res.status(201).json({ msg: "Success" });
    }
  }
};

export default handler;
