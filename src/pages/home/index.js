/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { baseURL } from "../../../src/rest/api";
import { Section, H4, WrapperUl } from "./style";
import { useQuery } from "react-query";
import axios from "axios";
import LoadingDots from "../../atomic/Loading/index";
import Story from "../../components/story";

const Home = () => {
  const { isLoading, isError, data, isPreviousData } = useQuery(
    ["newStories", 5, { preview: true }],
    () => axios.get(`${baseURL}newstories.json`).then((res) => res.data)
  );

  return (
    <Section
      className={isLoading || isError ? "section-content is-loading-error" : "section-content"}>
      {isLoading && (
        <H4>
          Loading
          <LoadingDots />
        </H4>
      )}
      {isError && (
        <>
          <H4>Unable to load data.&nbsp;</H4>
          <H4>
            Checking your connection
            <LoadingDots />
          </H4>
        </>
      )}
      {data && (
        <WrapperUl className="wrapper-list">
          {data?.map((item, index) => (
            <Story key={index} index={index} id={item} />
          ))}
        </WrapperUl>
      )}
    </Section>
  );
};

export default Home;
