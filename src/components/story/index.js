/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { storyURL } from "../../rest/api";
import { sanitizeUrl } from "../../helper/index";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import {
  A,
  H3,
  WrapperLi,
  WrapperPoints,
  WrapperInformation,
  WrapperEditor,
  WrapperTiming,
  Span,
  Divider,
  WrapperTitle,
  Url,
} from "./style";

const Story = ({ id }) => {
  const { isLoading, isError, data, isPreviousData } = useQuery(["story", id], () =>
    axios.get(`${storyURL + id}.json`).then((res) => res.data)
  );

  return (
    <>
      {data && (
        <WrapperLi className="list-item">
          {data?.url && (
            <WrapperTitle>
              <A href={data?.url} className="href">
                <H3 className="title">{data?.title}</H3>
              </A>

              <A href={data?.url}>
                <Url className="url">
                  <Span>({sanitizeUrl(data?.url)})</Span>
                </Url>
              </A>
            </WrapperTitle>
          )}

          <WrapperInformation className="wrapper-information">
            {data?.score && (
              <WrapperPoints className="wrapper-score">
                <Span>{data?.score}</Span>
                <Span>&nbsp;points</Span>
              </WrapperPoints>
            )}

            {data?.by && (
              <WrapperEditor className="wrapper-editor-by">
                <Span>&nbsp;by&nbsp;</Span>
                <Link to={`/user/${data.by}`}>{data.by}</Link>
              </WrapperEditor>
            )}

            {data?.by && data?.time && <Divider classaName="divider">|</Divider>}

            {data?.time && (
              <WrapperTiming className="wrapper-timing">
                <Span>{moment.unix(data?.time).fromNow()}</Span>
              </WrapperTiming>
            )}
          </WrapperInformation>
        </WrapperLi>
      )}
    </>
  );
};

export default Story;
