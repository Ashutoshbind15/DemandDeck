import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/router";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const AuthPage = ({ session }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signup, setSignup] = useState(true);

  const toggleHandler = () => {
    setSignup((prev) => !prev);
  };

  return (
    <form>
      <input
        type="text"
        name=""
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          signIn("credentials", { email, password });
        }}
      >
        Submit
      </button>
    </form>
  );
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
