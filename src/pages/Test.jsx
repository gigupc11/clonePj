import React from 'react';
import DragDrop from '../components/DragDrop';
import RoomLocationInput from '../components/RoomLocationInput';
import RoomInfo from '../components/RoomInfo';
import RoomRegiTitle from '../components/RoomRegiTitle'
function Test() {
    return (
        <>
            <div>TEST PAGE</div>
            <DragDrop/>
            <RoomInfo/>
            <RoomLocationInput/>
            <RoomRegiTitle title="숙소 기본 정보를 알려주세요." alert="침대 유형과 같은 세부 사항은 나중에 추가하시 수 있습니다."/>
        </>
    );
}

export default Test;