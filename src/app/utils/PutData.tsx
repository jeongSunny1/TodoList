import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { PutProps } from "../types/type";

const PutData: React.FC<PutProps> = ({ item, updateTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newContent, setNewContent] = useState(item.content);

  const onClickUpdate = () => {
    updateTodo({ ...item, title: newTitle, content: newContent });

    setIsOpen(false);
    alert("수정완료 되었습니다!");
  };

  if (isOpen) {
    return (
      <>
        {/* <p className="text-xl	font-medium	">제목</p> */}
        <Input
          className="w-[280px]"
          placeholder="제목"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        {/* <p className="text-xl	font-medium	">내용</p> */}
        <Input
          className="w-[280px]"
          placeholder="내용"
          onChange={(e) => setNewContent(e.target.value)}
        />
        <Button className="w-[90px] mx-1" type="button" onClick={onClickUpdate}>
          수정완료
        </Button>

        <Button
          className="w-[90px] mx-1"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          취소
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button
          className="w-[90px] mx-1"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          수정
        </Button>
      </>
    );
  }
};

export default PutData;
