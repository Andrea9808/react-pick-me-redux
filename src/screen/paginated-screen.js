import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/layout";
import { useSelector, useDispatch } from "react-redux";
import PhotoSection from "../components/Photo-Section";
import Paginator from "../components/Paginator";
// import { Container, Stack } from "../components/styled";
// import { rowalizer } from "../utils/helpers";
import { useParams } from "react-router-dom";

const PaginatedScreen = () => {

    const { page } = useParams();

  return (
    <Layout>
      <h1>Paginated page: {page}</h1>
    </Layout>
  );
};

export default PaginatedScreen;