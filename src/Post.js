function Post(props){

    return (
        <ol>
            <li>
            <MessageId/>
            <SenderProfileImage/>
            <SenderName/>
            <ReceiverProfileImage/>
            <ReceiverName/>
            <Message/>
            </li>
        </ol>
        );
    }

function MessageId(props){
    return <p>{[props].id.toString()}</p>
}

function SenderProfileImage(props){
    return <img src = {props.sender.profileImage}/>
}

function SenderName(props){
    return <p>{props.sender.firstName.toString()} 
                {props.sender.lastName.toString()}</p>
}

function ReceiverProfileImage(props){
    return <img src = {props.receiver.profileImage}/>
}

function ReceiverName(props){
    return <p>{props.receiver.firstName.toString()} 
                {props.sender.lastName.toString()}</p>
}

function Message(props){
    return <p>{props.message.toString()}</p>
}