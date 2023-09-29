import React from "react";
import {Button, Drawer, Space, Tooltip} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {changeThemeColor, getFontColor} from "../typescripts/publicFunctions";
import {PreferenceDataInterface, ThemeColorInterface} from "../typescripts/publicInterface";
import {device} from "../typescripts/publicConstants";
import PreferenceLinkComponent from "../preferenceComponents/preferenceLinkComponent";
import PreferenceFooterComponent from "../preferenceComponents/preferenceFooterComponent";
import PreferenceEmailComponent from "../preferenceComponents/preferenceEmailComponent";
import PreferenceInfoComponent from "../preferenceComponents/preferenceInfoComponent";
import PreferenceImageComponent from "../preferenceComponents/preferenceImageComponent";
import PreferenceFunctionComponent from "../preferenceComponents/preferenceFunctionComponent";
import PreferenceHeaderComponent from "../preferenceComponents/preferenceHeaderComponent";
import PreferenceProductComponent from "../preferenceComponents/preferenceProductComponent";

type propType = {
    themeColor: ThemeColorInterface,
    preferenceData: PreferenceDataInterface,
    getPreferenceData: any,
}

type stateType = {
    hoverColor: string,
    backgroundColor: string,
    fontColor: string,
    buttonShape: "circle" | "default" | "round" | undefined,
    displayDrawer: boolean,
    drawerPosition: "right" | "bottom",
}

interface PreferenceComponent {
    state: stateType,
    props: propType
}

class PreferenceComponent extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            hoverColor: "",
            backgroundColor: "",
            fontColor: "",
            buttonShape: "round",
            displayDrawer: false,
            drawerPosition: "right",
        };
    }

    btnMouseOver(e: any) {
        e.currentTarget.style.backgroundColor = this.state.hoverColor;
        e.currentTarget.style.color = getFontColor(this.state.hoverColor);
    }

    btnMouseOut(e: any) {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = this.state.fontColor;
    }

    showDrawerBtnOnClick() {
        this.setState({
            displayDrawer: true,
        })
    };

    drawerOnClose() {
        this.setState({
            displayDrawer: false,
        })
    };

    componentDidMount() {
        // 屏幕适配
        if (device === "iPhone" || device === "Android") {
            this.setState({
                drawerPosition: "bottom"
            })
        }
    }

    componentWillReceiveProps(nextProps: any, prevProps: any) {
        if (nextProps.themeColor !== prevProps.themeColor) {
            this.setState({
                hoverColor: nextProps.themeColor.themeColor,
                backgroundColor: nextProps.themeColor.componentBackgroundColor,
                fontColor: nextProps.themeColor.componentFontColor,
            }, () => {
                changeThemeColor("#preferenceBtn", this.state.backgroundColor, this.state.fontColor);
            });
        }

        if (nextProps.preferenceData !== prevProps.preferenceData) {
            this.setState({
                buttonShape: nextProps.preferenceData.buttonShape === "round" ? "circle" : "default"
            })
        }
    }

    render() {
        return (
            <>
                <Tooltip title={"菜单栏"} placement={"bottomRight"} color={this.state.backgroundColor}>
                    <Button shape={this.state.buttonShape} icon={<MenuOutlined style={{fontSize: "16px"}}/>} size={"large"}
                            onClick={this.showDrawerBtnOnClick.bind(this)}
                            id={"preferenceBtn"}
                            className={"componentTheme zIndexHigh"}
                            style={{
                                backgroundColor: this.state.backgroundColor
                            }}
                    />
                </Tooltip>
                <Drawer
                    size={"default"}
                    width={380}
                    height={500}
                    placement={this.state.drawerPosition}
                    onClose={this.drawerOnClose.bind(this)}
                    open={this.state.displayDrawer}
                    closeIcon={false}
                    headerStyle={{color: this.state.fontColor, borderBottomColor: this.state.fontColor}}
                    drawerStyle={{backgroundColor: this.state.backgroundColor}}
                    maskStyle={{backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)"}}
                    title={
                        <PreferenceHeaderComponent
                            hoverColor={this.state.hoverColor}
                            fontColor={this.state.fontColor}
                            preferenceData={this.props.preferenceData}/>
                    }
                    footer={
                        <PreferenceFooterComponent
                            hoverColor={this.state.hoverColor}
                            fontColor={this.state.fontColor}
                            preferenceData={this.props.preferenceData}/>
                    }
                    footerStyle={{
                        backgroundColor: this.state.backgroundColor,
                        borderTopColor: this.state.fontColor,
                        textAlign: "center"
                    }}
                >
                    <Space direction={"vertical"} size={"large"}>
                        <PreferenceImageComponent
                            hoverColor={this.state.hoverColor}
                            backgroundColor={this.state.backgroundColor}
                            fontColor={this.state.fontColor}
                            getPreferenceData={this.props.getPreferenceData}/>
                        <PreferenceFunctionComponent
                            hoverColor={this.state.hoverColor}
                            backgroundColor={this.state.backgroundColor}
                            fontColor={this.state.fontColor}
                            getPreferenceData={this.props.getPreferenceData}/>
                        <PreferenceInfoComponent
                            hoverColor={this.state.hoverColor}
                            backgroundColor={this.state.backgroundColor}
                            fontColor={this.state.fontColor}
                            preferenceData={this.props.preferenceData}/>
                        <PreferenceEmailComponent
                            hoverColor={this.state.hoverColor}
                            backgroundColor={this.state.backgroundColor}
                            fontColor={this.state.fontColor}
                            preferenceData={this.props.preferenceData}/>
                        <PreferenceProductComponent
                            hoverColor={this.state.hoverColor}
                            backgroundColor={this.state.backgroundColor}
                            fontColor={this.state.fontColor}
                            preferenceData={this.props.preferenceData}/>
                        {/*<PreferenceLinkComponent*/}
                        {/*    hoverColor={this.state.hoverColor}*/}
                        {/*    backgroundColor={this.state.backgroundColor}*/}
                        {/*    fontColor={this.state.fontColor}*/}
                        {/*    preferenceData={this.props.preferenceData}/>*/}
                    </Space>
                </Drawer>
            </>
        );
    }
}

export default PreferenceComponent;