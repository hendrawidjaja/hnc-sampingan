/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getStory } from "../../rest/api";
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

  const formatUnixTimeStamp = (current, previous) => {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return (
        "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
      );
    } else {
      return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
    }
  };

  return (
    story && (
      <WrapperLi className="list-item">
        <A href="/#" className="href">
          <Title className="title">{story?.title}</Title>

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
        </A>
      </WrapperLi>
    )
  );
};

export default Story;
