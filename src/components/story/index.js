/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getStory } from "../../rest/api";
import { sanitizeUrl } from "../../helper/index";
import moment from "moment";
import {
  A,
  Title,
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

const Story = (props) => {
  const [story, setStory] = useState({});
  const { id } = props;

  const { isLoading, isError, data, isPreviousData } = useQuery(
    ["story"],
    () => getStory(id),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    getStory(id).then((data) => {
      return data && setStory(data);
    });
  }, []);

  return (
    story && (
      <WrapperLi className="list-item">
        {story?.title && story?.url && (
          <WrapperTitle>
            <A href={story?.url} className="href">
              <Title className="title">{story?.title}</Title>
            </A>

            <A href={story?.url}>
              <Url className="url">
                <span>({sanitizeUrl(story?.url)})</span>
              </Url>
            </A>
          </WrapperTitle>
        )}

        <WrapperInformation className="wrapper-information">
          {story?.score && (
            <WrapperPoints className="wrapper-score">
              <span>{story?.score}</span>
              <span>&nbsp;points</span>
            </WrapperPoints>
          )}

          {story?.by && (
            <WrapperEditor className="wrapper-editor-by">
              <Span>&nbsp;by {story?.by}</Span>
            </WrapperEditor>
          )}

          {story?.by && story?.time && (
            <Divider classaName="divider">|</Divider>
          )}

          {story?.time && (
            <WrapperTiming className="wrapper-timing">
              <Span>{moment.unix(story?.time).fromNow()}</Span>
            </WrapperTiming>
          )}
        </WrapperInformation>
      </WrapperLi>
    )
  );
};

export default Story;
