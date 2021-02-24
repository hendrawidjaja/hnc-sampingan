/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { LoadingDots } from "../../atomic/loading/style";
import { getStory } from "../../rest/api";
import { WrapperStory, WrapperUl, WrapperLi } from "./style";

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

  useEffect(() => {
    data && console.log("25", data.id);
  }, []);

  return (
    <WrapperStory>
      <WrapperUl>{story && <WrapperLi>{story?.title}</WrapperLi>}</WrapperUl>
    </WrapperStory>
  );
};

export default Story;
