/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { baseURL } from "../../../src/rest/api";
import { useQuery } from "react-query";
import axios from "axios";
import LoadingDots from "../../atomic/loading/index";
import Story from "../../components/story";
import { Section, H3, WrapperStory, WrapperUl } from "./style";

const Home = () => {
  const { isLoading, isError, data, isPreviousData } = useQuery("newStories", () =>
    axios.get(`${baseURL}newstories.json`).then((res) => res.data)
  );

  return (
    <Section
      className={isLoading || isError ? "section-content is-loading-error" : "section-content"}>
      {isLoading && (
        <H3>
          Loading
          <LoadingDots />
        </H3>
      )}
      {isError && (
        <>
          <H3>Unable to load data.&nbsp;</H3>
          <H3>
            Checking your connection
            <LoadingDots />
          </H3>
        </>
      )}
      {data && (
        <WrapperStory className="wrapper">
          <WrapperUl className="wrapper-list">
            {data?.map((item, index) => (
              <Story key={index} id={item} />
            ))}
          </WrapperUl>
        </WrapperStory>
      )}
    </Section>
  );
};

export default Home;
