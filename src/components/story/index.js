/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import { storyURL } from "../../rest/api";
import { sanitizeUrl } from "../../helper/index";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import
  {
  A,
  H4,
  WrapperLi,
  WrapperPoints,
  WrapperInformation,
  WrapperEditor,
  WrapperTiming,
  Divider,
  WrapperTitle,
  SanitizeUrl,
  Points,
} from "./style";

const Story = ({ id }) => {
  const { isLoading, isError, data, isPreviousData } = useQuery(
    ["story", id],
    () => axios.get(`${storyURL + id}.json`).then((res) => res.data)
  );

  return (
    <>
      {data && (
        <WrapperLi className="list-item">
          {data?.url && (
            <A href={data?.url} className="href">
              <H4 className="title">{data?.title}</H4>

              <SanitizeUrl className="url">
                ({sanitizeUrl(data?.url)})
              </SanitizeUrl>
            </A>
          )}

          <WrapperInformation className="wrapper-information">
            {data?.score && (
              <Points className="wrapper-score">
                {data?.score} points by&nbsp;
              </Points>
            )}

            {data?.by && <Link to={`/user/${data.by}`}>{data.by}</Link>}

            {data?.by && data?.time && (
              <Divider classaName="divider">|</Divider>
            )}

            {data?.time && (
              <WrapperTiming className="wrapper-timing">
                {moment.unix(data?.time).fromNow()}
              </WrapperTiming>
            )}
          </WrapperInformation>
        </WrapperLi>
      )}
    </>
  );
};

export default Story;
