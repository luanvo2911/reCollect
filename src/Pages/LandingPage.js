import React from 'react';
import { Button, Layout, theme, Typography, Card, Image, FloatButton } from 'antd';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import img_front from "../asset/AdobeStock_355885536 1.png";
import placeholder_img from "../asset/Placeholder image.png";
import placeholder_img2 from "../asset/Placeholder image2.png";
import placeholder_img3 from "../asset/Placeholder image3.png";

const { Header } = Layout;
const { Text, Title } = Typography;
AOS.init(
    {
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    }
);

export default function LandingPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <FloatButton.BackTop />
            <Layout className="layout">
                <Header style={{ backgroundColor: "#10393B", padding: "10px" }
                }>
                    <div className="logo" />
                    <div className="right" style={{
                        margin: "0.7rem",
                        marginRight: "1em",
                    }}>
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#EF8450",
                                borderColor: "#EF8450",
                                color: "white",
                            }}
                            size="large"
                            href="/signin"
                        >Sign in</Button>
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#10393B",
                                borderColor: "#EF8450",
                                color: "#EF8450",
                            }}
                            size="large"
                            href="/signup"
                        >Sign up</Button>
                    </div>
                </Header>
                <div
                    className="site-layout-content"
                    style={{
                        backgroundColor: "#10393B",
                        borderBottomRightRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        padding: "50px",
                        paddingBottom: "50px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap"
                        }}
                    >
                        <div
                            style={{
                                flex: "33.3%",
                                padding: "1.2em",
                                alignSelf: "center"
                            }}
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine"
                        >
                            <Text style={{
                                color: "white",
                                fontSize: "1.5rem",
                            }}

                            >Everyone has an old item...</Text>
                            <Title
                                style={{ color: "white", marginTop: 0, fontSize: "5em" }}
                            > Give your goods a second life!</Title>
                            <Text
                                style={{ color: "white", fontSize: "1.5rem" }}
                            >
                                Welcome to reCollect, where you can trade your old drawer sitting alone in the corner of your
                                basement for something nice to put on your bedroom without additional costs.
                            </Text>
                            <div
                                style={{
                                    marginTop: "20px",
                                }}
                            >
                                <Button
                                    style={{
                                        borderRadius: "24px",
                                        marginRight: "16px",
                                        backgroundColor: "#EF8450",
                                        borderColor: "#EF8450",
                                        color: "white",
                                    }}
                                    size="large"
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine"
                                    href="/signup"
                                >Sign Up Now</Button>
                                <Button
                                    style={{
                                        borderRadius: "24px",
                                        marginRight: "16px",
                                        backgroundColor: "#10393B",
                                        borderColor: "#EF8450",
                                        color: "#EF8450",
                                    }}
                                    size="large"
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-sine"
                                    href="#site-layout-content-2"
                                >Explore more</Button>
                            </div>
                        </div>

                        <Image
                            width={900}
                            src={img_front}
                            style={{
                                flex: "66.6%",
                                borderRadius: "30px",
                            }}
                            preview='false'
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine"
                        />

                    </div>

                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content-2"
                    id="site-layout-content-2"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        textAlign: "left",
                    }}
                >
                    <Card
                        style={{
                            width: 400,
                            margin: 30,
                            backgroundColor: "#EF8450",
                            borderRadius: "24px"
                        }}
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="500"
                        data-aos-once="false"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title style={{ color: "white" }}
                        >$2.12 bil.</Title>
                        <Text style={{
                            color: "white", fontSize: "1.5rem",
                        }}>Tons of waste each year</Text>
                    </Card>
                    <Card
                        style={{
                            width: 400,
                            margin: 30,
                            borderColor: "#EF8450",
                            borderRadius: "24px"
                        }}
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="750"
                        data-aos-once="false"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title>{"<"}6 months</Title>
                        <Text
                            style={{
                                fontSize: "1.5rem",
                            }}
                        >An item's lifetime before trashed</Text>
                    </Card>
                    <Card
                        style={{
                            width: 400,
                            margin: 30,
                            borderColor: "#EF8450",
                            borderRadius: "24px"
                        }}
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-once="false"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title>80%</Title>
                        <Text
                            style={{
                                fontSize: "1.5rem",
                            }}
                        >waste is unrecycled each year</Text>
                    </Card>
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            flex: "33.3%",
                            padding: "5px",
                            paddingRight: "20px",
                            alignSelf: "center"
                        }}
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title
                            style={{
                                fontSize: "3rem"
                            }}>Trade old goods</Title>
                        <Text style={{
                            fontSize: "1.25rem"
                        }}>With reCollect, you can trade your old items with something new from other users without throwing them away. </Text>
                    </div>
                    <Image
                        width={700}
                        src={placeholder_img}
                        style={{
                            flex: "66.6%",
                            padding: "5px",
                            borderRadius: "24px"
                        }}
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="2500"
                        data-aos-easing="ease-in-sine"
                    />
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexDirection: "row-reverse",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            flex: "33.3%",
                            padding: "5px",
                            textAlign: "left",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            alignSelf: "center"
                        }}
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-sine"
                    >
                        <Title
                            style={{
                                fontSize: "3rem"
                            }}>Give away</Title>
                        <Text
                            style={{
                                fontSize: "1.25rem"
                            }}>In case you don’t need anything in return, you are able to just simply give it away to someone who needs it more.</Text>
                    </div>
                    <Image
                        width={800}
                        src={placeholder_img2}
                        style={{
                            borderRadius: "24px",
                            padding: "5px",
                            paddingRight: "20px"
                        }}
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="2500"
                        data-aos-easing="ease-in-sine"
                    />
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    <div
                        style={{
                            flex: "20%",
                            padding: "5px",
                            alignSelf: "center",
                            paddingRight: "20px",
                        }}
                    >
                        <Title
                            style={{
                                fontSize: "3rem"
                            }}
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine" Z
                        >Donate, spread love</Title>
                        <Text
                            style={{
                                fontSize: "1.25rem"
                            }}
                        >With reCollect, you are able to donate your old items to ongoing charity events and charity organizations.</Text>
                    </div>
                    <Image
                        width={800}
                        src={placeholder_img3}
                        style={{
                            flex: "66.6%",
                            padding: "5px",
                            borderRadius: "24px"
                        }}
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="2500"
                        data-aos-easing="ease-in-sine"
                    />
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#10393B",
                        padding: "3rem",
                        paddingTop: "10rem",
                        paddingBottom: "10rem",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <Title
                            style={{
                                color: "white", marginTop: 0, fontSize: "3rem",
                            }}
                            data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-sine"
                        > Ready to reCollect?</Title>
                    </div>
                    <div
                        style={{
                            marginTop: "20px",
                            alignContent: "center"
                        }}
                    >
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#EF8450",
                                borderColor: "#EF8450",
                                color: "white"
                            }}
                            size="large"
                            data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-duration="2500"
                            data-aos-easing="ease-in-sine"
                            href="/signup"
                        >Sign Up Now</Button>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>About</h6>
                                <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Categories</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                    <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                    <a href="/">Scanfcode</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="/"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Layout>
        </div >
    )
}
