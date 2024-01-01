function Avatar(props) {
    return <img src={props.user.avatarUrl} alt={props.user.name} />;
}

const UserInfor = (props) => {
    return (
        <div className="user_infor">
            <Avatar user={props.user} />
            <div className="user_infor-name">{props.user.name}</div>
        </div>
    );
};

function Comment(props) {
    return (
        <div className="commnet">
            <UserInfor user={props.author} />
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{props.date}</div>
        </div>
    );
}

export default Comment;
