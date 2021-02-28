/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useQuery } from "react-query";
import { useRouteMatch } from "react-router-dom";
import { editorURL } from "../../rest/api.js";
import { Wrapper, WrapperSubmitted, Section, H3, Span, Value } from "./style";
import LoadingDots from "../../atomic/Loading/index";

const Editor = () => {
  let match = useRouteMatch({
    path: "/user/:editor",
    strict: true,
    sensitive: true,
  });

  const { isLoading, isError, data, isPreviousData } = useQuery(
    ["by", match.params.editor],
    () => axios.get(`${editorURL + match.params.editor}.json`).then((res) => res.data)
  );

  return (
    <Section
      className={isLoading || isError ? "section-content is-loading-error" : "section-content"}>
      {isLoading && (
        <H3>
          Loading profile
          <LoadingDots />
        </H3>
      )}
      {data && (
        <div className="wrapper">
          <Wrapper className="wrapper-user">
            <Span>user:</Span>
            <Value>{data.id}</Value>
          </Wrapper>
          <Wrapper className="wrapper-created">
            <Span>created:</Span>
            <Value>{data.created}</Value>
          </Wrapper>
          <Wrapper className="wrapper-karma">
            <Span>karma:</Span>
            <Value>{data.karma}</Value>
          </Wrapper>
          <Wrapper className="wrapper-about">
            <Span>about:</Span>
            <Value>{data.about}</Value>
          </Wrapper>

          <Wrapper className="wrapper-submitted">
            <Span>submitted:</Span>
            <WrapperSubmitted>
              {data.submitted &&
                data.submitted.map((item) => {
                  return <Value>{item}</Value>;
                })}
            </WrapperSubmitted>
          </Wrapper>
        </div>
      )}
    </Section>
  );
};

export default Editor;
