import React from "react";
import "../../App.css";
import {Button, Tooltip, message} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {changeThemeColor, isEmptyString} from "../../typescripts/publicFunctions";

type propType = {
    display: "none" | "block",
    imageColor: string,
    author: string,
    authorLink: string,
}

type stateType = {
    authorLink: string,
}

interface AuthorComponent {
    state: stateType,
    props: propType
}

class AuthorComponent extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            authorLink: "",
        };
    }

    componentWillReceiveProps(nextProps: any, prevProps: any) {
        if (nextProps !== prevProps) {
            changeThemeColor("#authorBtn", nextProps.imageColor);
        }
    }

    handleClick() {
        if (!isEmptyString(this.props.authorLink)) {
            window.open(this.props.authorLink);
        } else {
            message.error("无跳转链接");
        }
    }

    render() {
        return (
            <Tooltip title={"作者主页：" + this.props.authorLink}>
                <Button shape="round" icon={<UserOutlined/>} size={"large"}
                        onClick={this.handleClick.bind(this)}
                        id={"authorBtn"}
                        className={"frostedGlass zIndexHigh"}
                        style={{display: this.props.display}}
                >
                    {this.props.author}
                </Button>
            </Tooltip>
        );
    }
}

export default AuthorComponent;