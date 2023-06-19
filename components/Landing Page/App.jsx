import DisplayCards from "../UI/DisplayCards";
import Banner from "./Banner";
import Plans from "./Plans";

function LandingPageComponent() {
  return (
    <>
      <Banner />
      <div className="px-16 flex flex-col">
        <DisplayCards
          title={"Consumer?"}
          desc={"The consumers can create new demands and poll for them"}
          left={true}
        />
        <DisplayCards
          title={"Vendor?"}
          desc={
            "The vendors can create the proposals and request for business sessions, and request for resources from allocators"
          }
        />
        <DisplayCards
          title={"Allocator?"}
          desc={
            "The allocators can create new resources, allocate and approve the incoming requests for the resources"
          }
          left={true}
        />
      </div>
      <Plans />
    </>
  );
}

export default LandingPageComponent;
