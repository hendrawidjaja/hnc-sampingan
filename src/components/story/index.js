/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import { storyURL } from "../../rest/api";
import { sanitizeUrl } from "../../helper/index";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import {
  A,
  Divider,
  H4,
  IndexNumber,
  Points,
  SanitizeUrl,
  Wrapper,
  WrapperInformation,
  WrapperLi,
  WrapperTiming,
} from "./style";

const Story = ({ index, id }) => {
  const { isLoading, isError, data, isPreviousData } = useQuery(["story", id], () =>
    axios.get(`${storyURL + id}.json`).then((res) => res.data)
  );

  return (
    <>
      {data && data?.url && data?.title && data?.score && data?.by && data?.time && (
        <WrapperLi className="list-item">
          <IndexNumber>{index < 9 ? `0${index + 1}` : index + 1}.</IndexNumber>

          <Wrapper>
            {data?.url && (
              <A href={data?.url} className="href">
                <H4 className="title">{data?.title}</H4>
                <SanitizeUrl className="url">({sanitizeUrl(data?.url)})</SanitizeUrl>
              </A>
            )}

            <WrapperInformation className="wrapper-information">
              {data?.score && (
                <Points className="wrapper-score">{data?.score} points by&nbsp;</Points>
              )}

              {data?.by && <Link to={`/user/${data.by}`}>{data.by}</Link>}

              {data?.by && data?.time && <Divider classaName="divider">|</Divider>}

              {data?.time && (
                <WrapperTiming className="wrapper-timing">
                  {moment.unix(data?.time).fromNow()}
                </WrapperTiming>
              )}
            </WrapperInformation>
          </Wrapper>
        </WrapperLi>
      )}
    </>
  );
};

export default Story;
