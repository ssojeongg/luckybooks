import { useState } from "react";
import React, { useEffect } from "react";
import '../assets/scss/SubCommunity.scss';
import { Link } from 'react-router-dom'
const SubCommunity = () => {
  const TabData = [
    { 
      id: 1, 
      button: "작가와의 만남", 
      content: "『쓰게 될 것』 메아리 낭독회",
      date: "2024.09.01",
      content2: "『디 에센셜 김연수』 메아리 낭독회",
      date2: "2024.09.02",
      content3: "『겨울을 지나가다』 메아리 낭독회",
      date3: "2024.09.03",
      content4: "『여름과 루비』 메아리 낭독회",
      date4: "2024.09.04",
      content5: "『달콤하게 바스러지는 베개들:』 메아리 낭독회",
      date5: "2024.09.05",
    },
    { id: 2,
      button: "독서모임", 
      content: "겨울 독서 워크숍: 아니 에르노",
      date: "2024.09.01",
      content2: "가을 독서 워크숍: 시몬 베유",
      date2: "2024.09.02",
      content3: "여름 독서클럽: 존 버거",
      date3: "2024.09.03",
      content4: "독서클럽 '봄밤의 맥주곁에 두는 이야기들'",
      date4: "2024.09.04",
      content5: "에세이 읽기 독서클럽",
      date5: "2024.09.05",
    },
    { id: 3, 
      button: "여러분의 이야기", 
      content: "10월 월간독립출판물 이야기",
      date: "2024.10.03",
      content2: "9월 월간독립출판물 이야기",
      date2: "2024.09.02",
      content3: "8월 월간독립출판물 이야기",
      date3: "2024.08.14",
      content4: "7월 월간독립출판물 이야기",
      date4: "2024.07.04",
      content5: "6월 월간독립출판물 이야기",
      date5: "2024.06.21"
    
    },
    { id: 4,
      button: "자주묻는 질문", 
      content: "정기구독을 중단하거나 쉴 수 있나요?", 
      date: "2024.10.03",
      content2: "이미 있는 책이 오면 어떻게 해야하나요?",
      date2: "2024.09.02",
      content3: "배송지 정보를 수정하고 싶습니다.",
      date3: "2024.08.14",
      content4: "배송조회는 어떻게 하나요?",
      date4: "2024.07.04",
      content5: "독서클럽에 참여하려면 어떻게 해야하나요?",
      date5: "2024.06.21"
    },
  ]; 
  const [activeTab, setActiveTab] = useState(TabData[0].id);
  return (
    <>
      <div className="wrap7">
        <div className="inner">
        <div className="text_box">
        <Link to ="/"><h2>HOME&nbsp;&nbsp;&nbsp;</h2></Link>
        <a className='community' href="javascript:void(0)">&nbsp;&nbsp;&nbsp;COMMUNITY&nbsp;&nbsp;&nbsp;</a>
        </div>
        </div>
        <div className="img_box">
        <a href="javascript:void(0)"><img src={import.meta.env.VITE_PUBLIC_URL + `/sub_community.png`} alt='main'/></a>
        </div>
        <div className='button'>
          <div className="inner">
            <div className="btn">
        {TabData.map((tab) => (
          <button
            key={tab.id}
            data-active={activeTab === tab.id ? "true" : "false"}
            onClick={() => setActiveTab(tab.id)}>
            {tab.button}
          </button>
        ))}
        </div>
      <div className="TabContent">
        <table>
          <tr>
            <td> {TabData.find((a) => a.id === activeTab)?.content}</td>
            <td className="date"> {TabData.find((a) => a.id === activeTab)?.date}</td>
          </tr>
          <tr>
            <td> {TabData.find((a) => a.id === activeTab)?.content2}</td>
            <td className="date"> {TabData.find((a) => a.id === activeTab)?.date2}</td>
          </tr>
          <tr> 
            <td> {TabData.find((a) => a.id === activeTab)?.content3}</td>
            <td className="date"> {TabData.find((a) => a.id === activeTab)?.date3}</td>
          </tr>  
          <tr>
            <td> {TabData.find((a) => a.id === activeTab)?.content4}</td>
            <td className="date"> {TabData.find((a) => a.id === activeTab)?.date4}</td>
          </tr>
          <tr>
            <td> {TabData.find((a) => a.id === activeTab)?.content5}</td>
            <td className="date"> {TabData.find((a) => a.id === activeTab)?.date5}</td>
          </tr>
        </table>
      </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SubCommunity