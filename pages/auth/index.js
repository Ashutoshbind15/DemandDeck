import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Auth from "../../components/Forms/Auth";
import { useRouter } from "next/router";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const AuthPage = ({ session }) => {
  const [signup, setSignup] = useState(true);

  const toggleHandler = () => {
    setSignup((prev) => !prev);
  };

  return <Auth signup={signup} setSignup={toggleHandler} />;
};

export default AuthPage;

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};
