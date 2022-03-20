var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("components/PageHeader/PageHeader", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/album-white-36.svg", "./PageHeader.scss"], function (require, exports, jsx_runtime_1, react_router_dom_1, album_white_36_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    album_white_36_svg_1 = __importDefault(album_white_36_svg_1);
    function PageHeader() {
        const { pathname } = (0, react_router_dom_1.useLocation)();
        const logout = () => {
            sessionStorage.removeItem("authorization");
        };
        return ((0, jsx_runtime_1.jsx)("header", Object.assign({ className: "header" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header__wrapper" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header__container" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/home", className: "header__link" }, { children: (0, jsx_runtime_1.jsx)("img", { src: album_white_36_svg_1.default, alt: "album", className: "header__image" }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/home", className: "header__link" }, { children: (0, jsx_runtime_1.jsx)("h1", Object.assign({ className: "header__title" }, { children: "Collectify" })) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "header__container" }, { children: (0, jsx_runtime_1.jsx)("nav", Object.assign({ className: "header__nav" }, { children: (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "header__nav-list" }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: "header__nav-item" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/home", isActive: () => {
                                                if (pathname.startsWith('/home/collection/') && pathname.endsWith('/edit')) {
                                                    return true;
                                                }
                                                if (pathname.startsWith('/home/wishlist/') && pathname.endsWith('/edit')) {
                                                    return true;
                                                }
                                                return ['/home', '/home/collection', '/home/wishlist', '/home/search'].includes(pathname);
                                            }, className: "header__link", activeClassName: "header__link--active" }, { children: "Home" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "header__nav-item" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/about", className: "header__link", activeClassName: "header__link--active" }, { children: "About" })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: 'header__nav-item' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/", className: "header__link", onClick: logout }, { children: "Logout" })) }))] })) })) }))] })) })));
    }
    exports.default = PageHeader;
});
define("components/PageHeader/index", ["require", "exports", "components/PageHeader/PageHeader"], function (require, exports, PageHeader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    PageHeader_1 = __importDefault(PageHeader_1);
    exports.default = PageHeader_1.default;
});
define("components/PageFooter/PageFooter", ["require", "exports", "react/jsx-runtime", "./PageFooter.scss"], function (require, exports, jsx_runtime_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function PageFooter() {
        return ((0, jsx_runtime_2.jsx)("footer", Object.assign({ className: "footer" }, { children: (0, jsx_runtime_2.jsx)("div", Object.assign({ className: "footer__wrapper" }, { children: (0, jsx_runtime_2.jsx)("p", Object.assign({ className: "footer__copyright" }, { children: "\u00A9 2021, Collectify & Nigel D'Souza" })) })) })));
    }
    exports.default = PageFooter;
});
define("components/PageFooter/index", ["require", "exports", "components/PageFooter/PageFooter"], function (require, exports, PageFooter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    PageFooter_1 = __importDefault(PageFooter_1);
    exports.default = PageFooter_1.default;
});
define("pages/AboutPage/AboutPage", ["require", "exports", "react/jsx-runtime", "react", "react-router-dom", "../../assets/images/nigel.jpg", "@fortawesome/react-fontawesome", "@fortawesome/free-brands-svg-icons", "components/PageHeader/index", "components/PageFooter/index", "./AboutPage.scss"], function (require, exports, jsx_runtime_3, react_1, react_router_dom_2, nigel_jpg_1, react_fontawesome_1, free_brands_svg_icons_1, PageHeader_2, PageFooter_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    nigel_jpg_1 = __importDefault(nigel_jpg_1);
    PageHeader_2 = __importDefault(PageHeader_2);
    PageFooter_2 = __importDefault(PageFooter_2);
    function AboutPage() {
        const [hasAccess, setHasAccess] = (0, react_1.useState)(false);
        (0, react_1.useEffect)(() => {
            if (sessionStorage.getItem("authorization")) {
                setHasAccess(true);
            }
        }, []);
        if (!hasAccess) {
            return ((0, jsx_runtime_3.jsxs)(jsx_runtime_3.Fragment, { children: [(0, jsx_runtime_3.jsx)("p", { children: "Error 403: Access forbidden" }), (0, jsx_runtime_3.jsx)(react_router_dom_2.Link, Object.assign({ to: '/' }, { children: "Click here to go back" }))] }));
        }
        return ((0, jsx_runtime_3.jsxs)(jsx_runtime_3.Fragment, { children: [(0, jsx_runtime_3.jsx)(PageHeader_2.default, {}), (0, jsx_runtime_3.jsx)("main", Object.assign({ className: "about-main" }, { children: (0, jsx_runtime_3.jsxs)("section", Object.assign({ className: "about" }, { children: [(0, jsx_runtime_3.jsxs)("div", Object.assign({ className: "about__wrapper" }, { children: [(0, jsx_runtime_3.jsx)("div", Object.assign({ className: "about__img-container" }, { children: (0, jsx_runtime_3.jsx)("img", { src: nigel_jpg_1.default, alt: "Nigel D'Souza", className: "about__img" }) })), (0, jsx_runtime_3.jsxs)("div", Object.assign({ className: "about__text-container" }, { children: [(0, jsx_runtime_3.jsx)("h2", Object.assign({ className: "about__title" }, { children: "About the Developer" })), (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "about__paragraph" }, { children: "Hi everyone! My name is Nigel D'Souza and this is my Capstone project, Collectify. As an avid music collector, I always found it hard to archive my personal collection, because I found that I would always lose or misplace my own written record." })), (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "about__paragraph" }, { children: "This app allows a user to archive their own collection through the use of Spotify's API, as well as the MySQL database, Express and Node.js to store the information and retrieve information via an Express server, and React, React Router DOM and Sass provide the User Interface and Design. I hope you enjoy the functionality of my project!" }))] }))] })), (0, jsx_runtime_3.jsxs)("div", Object.assign({ className: "about__wrapper-two" }, { children: [(0, jsx_runtime_3.jsx)("div", Object.assign({ className: "about__header-container" }, { children: (0, jsx_runtime_3.jsx)("h2", Object.assign({ className: "about__title" }, { children: "Contact" })) })), (0, jsx_runtime_3.jsxs)("div", Object.assign({ className: "about__link-container" }, { children: [(0, jsx_runtime_3.jsxs)("div", Object.assign({ className: "about__item" }, { children: [(0, jsx_runtime_3.jsx)("a", Object.assign({ className: "about__item--link", href: "https://www.linkedin.com/in/nigel-d-souza/" }, { children: (0, jsx_runtime_3.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedin, size: "3x" }) })), (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "about__item--paragraph" }, { children: "Connect with me on LinkedIn!" }))] })), (0, jsx_runtime_3.jsxs)("div", Object.assign({ className: "about__item" }, { children: [(0, jsx_runtime_3.jsx)("a", Object.assign({ className: "about__item--link", href: "https://github.com/glitcher93" }, { children: (0, jsx_runtime_3.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faGithubSquare, size: "3x" }) })), (0, jsx_runtime_3.jsx)("p", Object.assign({ className: "about__item--paragraph" }, { children: "Check out my Github profile!" }))] }))] }))] }))] })) })), (0, jsx_runtime_3.jsx)(PageFooter_2.default, {})] }));
    }
    exports.default = AboutPage;
});
define("pages/AboutPage/index", ["require", "exports", "pages/AboutPage/AboutPage"], function (require, exports, AboutPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AboutPage_1 = __importDefault(AboutPage_1);
    exports.default = AboutPage_1.default;
});
define("utils/interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("components/Hero/Hero", ["require", "exports", "react/jsx-runtime", "react", "jwt-decode", "react", "./Hero.scss"], function (require, exports, jsx_runtime_4, react_2, jwt_decode_1, react_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jwt_decode_1 = __importDefault(jwt_decode_1);
    function Hero() {
        const [user, setUser] = (0, react_2.useState)({});
        (0, react_3.useEffect)(() => {
            const token = sessionStorage.getItem("authorization").split(' ')[1];
            const decodedUser = (0, jwt_decode_1.default)(token);
            setUser(decodedUser);
        }, []);
        return ((0, jsx_runtime_4.jsx)("section", Object.assign({ className: "hero" }, { children: (0, jsx_runtime_4.jsx)("div", Object.assign({ className: "hero__wrapper" }, { children: (0, jsx_runtime_4.jsxs)("div", Object.assign({ className: "hero_container" }, { children: [(0, jsx_runtime_4.jsxs)("h2", Object.assign({ className: "hero__title" }, { children: ["Hello, ", `${user.firstName}`] })), (0, jsx_runtime_4.jsx)("p", Object.assign({ className: "hero__paragraph" }, { children: "Start building your collection today!" }))] })) })) })));
    }
    exports.default = Hero;
});
define("components/Hero/index", ["require", "exports", "components/Hero/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Hero_1 = __importDefault(Hero_1);
    exports.default = Hero_1.default;
});
define("components/AlbumItem/AlbumItem", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/delete-white.svg", "../../assets/icons/edit-black.svg", "../../assets/icons/album-black-24.svg", "../../assets/icons/add-black.svg", "./AlbumItem.scss"], function (require, exports, jsx_runtime_5, react_router_dom_3, delete_white_svg_1, edit_black_svg_1, album_black_24_svg_1, add_black_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    delete_white_svg_1 = __importDefault(delete_white_svg_1);
    edit_black_svg_1 = __importDefault(edit_black_svg_1);
    album_black_24_svg_1 = __importDefault(album_black_24_svg_1);
    add_black_svg_1 = __importDefault(add_black_svg_1);
    function AlbumItem(props) {
        const renderButton = () => {
            if (props.handleOnClickCollection) {
                return (0, jsx_runtime_5.jsxs)("button", Object.assign({ className: "album__button", onClick: props.album ? () => { var _a; return (_a = props.handleOnClickCollection) === null || _a === void 0 ? void 0 : _a.call(props, props.album, props.id); } : undefined, title: "Add to collection" }, { children: [(0, jsx_runtime_5.jsx)("img", { src: add_black_svg_1.default, alt: "Add", className: "album__button--image" }), (0, jsx_runtime_5.jsx)("img", { src: album_black_24_svg_1.default, alt: "to collection", className: "album__button--image" })] }));
            }
        };
        return ((0, jsx_runtime_5.jsxs)("li", Object.assign({ style: {
                opacity: 0,
                animation: `fade-in .5s ${props.index * .25}s ease-out forwards`
            }, className: "album" }, { children: [(0, jsx_runtime_5.jsxs)("div", Object.assign({ className: "album__wrapper" }, { children: [(0, jsx_runtime_5.jsx)("div", Object.assign({ className: "album__img-container" }, { children: (0, jsx_runtime_5.jsx)("img", { src: props.image, alt: props.albumTitle, className: "album__img" }) })), (0, jsx_runtime_5.jsx)("div", Object.assign({ className: "album__container" }, { children: (0, jsx_runtime_5.jsxs)("div", Object.assign({ className: "album__text-container" }, { children: [(0, jsx_runtime_5.jsxs)("article", Object.assign({ className: "album__info" }, { children: [(0, jsx_runtime_5.jsx)("h3", Object.assign({ className: "album__title" }, { children: "Album:" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: "album__paragraph" }, { children: props.albumTitle }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: "album__info" }, { children: [(0, jsx_runtime_5.jsx)("h3", Object.assign({ className: "album__title" }, { children: "Artist:" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: "album__paragraph" }, { children: props.artist }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: "album__info" }, { children: [(0, jsx_runtime_5.jsx)("h3", Object.assign({ className: "album__title" }, { children: "Release Date:" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: "album__paragraph" }, { children: props.releaseDate }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: "album__info" }, { children: [(0, jsx_runtime_5.jsx)("h3", Object.assign({ className: "album__title" }, { children: "Number of Tracks:" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: "album__paragraph" }, { children: props.numTracks }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: "album__info" }, { children: [(0, jsx_runtime_5.jsx)("h3", Object.assign({ className: "album__title" }, { children: "Medium:" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: "album__paragraph" }, { children: props.medium }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: "album__info" }, { children: [(0, jsx_runtime_5.jsx)("h3", Object.assign({ className: "album__title" }, { children: "Number of Copies:" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: "album__paragraph" }, { children: props.numCopies }))] })), (0, jsx_runtime_5.jsxs)("article", Object.assign({ className: "album__info" }, { children: [(0, jsx_runtime_5.jsx)("h3", Object.assign({ className: "album__title" }, { children: "Description:" })), (0, jsx_runtime_5.jsx)("p", Object.assign({ className: "album__paragraph" }, { children: props.description }))] }))] })) }))] })), (0, jsx_runtime_5.jsxs)("div", Object.assign({ className: "album__buttons" }, { children: [renderButton(), (0, jsx_runtime_5.jsx)(react_router_dom_3.Link, Object.assign({ to: `/home/collection/${props.id}/edit` }, { children: (0, jsx_runtime_5.jsx)("button", Object.assign({ className: "album__button", title: "Edit" }, { children: (0, jsx_runtime_5.jsx)("img", { src: edit_black_svg_1.default, alt: "Edit", className: "album__button--image" }) })) })), (0, jsx_runtime_5.jsx)("button", Object.assign({ className: "album__button album__button--delete", onClick: () => props.handleOnClickDelete(props.id), title: "Delete" }, { children: (0, jsx_runtime_5.jsx)("img", { src: delete_white_svg_1.default, alt: "Delete", className: "album__button--image" }) }))] }))] })));
    }
    exports.default = AlbumItem;
});
define("components/AlbumItem/index", ["require", "exports", "components/AlbumItem/AlbumItem"], function (require, exports, AlbumItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AlbumItem_1 = __importDefault(AlbumItem_1);
    exports.default = AlbumItem_1.default;
});
define("components/CollectionList/CollectionList", ["require", "exports", "react/jsx-runtime", "components/AlbumItem/index", "./CollectionList.scss"], function (require, exports, jsx_runtime_6, AlbumItem_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AlbumItem_2 = __importDefault(AlbumItem_2);
    function CollectionList(props) {
        return ((0, jsx_runtime_6.jsx)("div", Object.assign({ className: "collection__list-container" }, { children: (props.collection.length === 0) ?
                (0, jsx_runtime_6.jsx)("p", Object.assign({ className: "collection__empty-list" }, { children: "Nothing to see here...yet" })) :
                (0, jsx_runtime_6.jsx)("ul", Object.assign({ className: "collection__list" }, { children: props.collection.map((album, i) => {
                        return (0, jsx_runtime_6.jsx)(AlbumItem_2.default, { id: album.id, index: i, image: album.image, albumTitle: album.albumTitle, artist: album.artist, releaseDate: album.releaseDate, numTracks: album.numTracks, medium: album.medium, numCopies: album.numCopies, description: album.description, handleOnClickDelete: props.handleOnClickDelete }, album.id);
                    }) })) })));
    }
    exports.default = CollectionList;
});
define("components/CollectionList/index", ["require", "exports", "components/CollectionList/CollectionList"], function (require, exports, CollectionList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CollectionList_1 = __importDefault(CollectionList_1);
    exports.default = CollectionList_1.default;
});
define("pages/CollectionPage/CollectionPage", ["require", "exports", "react/jsx-runtime", "axios", "react", "components/CollectionList/index", "./CollectionPage.scss"], function (require, exports, jsx_runtime_7, axios_1, react_4, CollectionList_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_1 = __importDefault(axios_1);
    CollectionList_2 = __importDefault(CollectionList_2);
    function CollectionPage() {
        const [collection, setCollection] = (0, react_4.useState)([]);
        (0, react_4.useEffect)(() => {
            const token = sessionStorage.getItem("authorization").split(" ")[1];
            if (typeof token === "string") {
                const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
                axios_1.default
                    .get(`${serverURL}/collection`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                    setCollection(response.data);
                })
                    .catch(err => console.log(err));
            }
        }, []);
        const handleOnClickDelete = (id) => {
            const token = sessionStorage.getItem("authorization").split(" ")[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_1.default
                .delete(`${serverURL}/collection/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(() => {
                axios_1.default
                    .get(`${serverURL}/collection`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                    setCollection(response.data);
                })
                    .catch(err => console.log(err));
            })
                .catch(err => console.log(err));
        };
        return ((0, jsx_runtime_7.jsxs)("section", Object.assign({ className: "collection" }, { children: [(0, jsx_runtime_7.jsx)("h3", Object.assign({ className: "collection__title" }, { children: "Your Collection" })), (0, jsx_runtime_7.jsx)(CollectionList_2.default, { collection: collection, handleOnClickDelete: handleOnClickDelete })] })));
    }
    exports.default = CollectionPage;
});
define("pages/CollectionPage/index", ["require", "exports", "pages/CollectionPage/CollectionPage"], function (require, exports, CollectionPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CollectionPage_1 = __importDefault(CollectionPage_1);
    exports.default = CollectionPage_1.default;
});
define("pages/EditCollectionItemPage/EditCollectionItemPage", ["require", "exports", "react/jsx-runtime", "axios", "react", "react-router-dom", "../../assets/icons/arrow-back-black.svg", "./EditCollectionItemPage.scss"], function (require, exports, jsx_runtime_8, axios_2, react_5, react_router_dom_4, arrow_back_black_svg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_2 = __importDefault(axios_2);
    arrow_back_black_svg_1 = __importDefault(arrow_back_black_svg_1);
    function EditCollectionItemPage(props) {
        const [collectionItem, setCollectionItem] = (0, react_5.useState)({});
        const [medium, setMedium] = (0, react_5.useState)({
            value: "",
            required: false
        });
        const [numCopies, setNumCopies] = (0, react_5.useState)({
            value: 0,
            required: false
        });
        const [description, setDescription] = (0, react_5.useState)({
            value: "",
            required: false
        });
        const [isSubmitted, setIsSubmitted] = (0, react_5.useState)(false);
        (0, react_5.useEffect)(() => {
            const token = sessionStorage.getItem("authorization").split(' ')[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_2.default
                .get(`${serverURL}/collection/${props.match.params.itemId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                setCollectionItem(response.data[0]);
                setMedium(Object.assign(Object.assign({}, medium), { value: response.data[0].medium }));
                setNumCopies(Object.assign(Object.assign({}, numCopies), { value: parseInt(response.data[0].numCopies) }));
                setDescription(Object.assign(Object.assign({}, description), { value: response.data[0].description }));
            })
                .catch(err => console.log(err));
            // eslint-disable-next-line
        }, []);
        const handleOnChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
                case "medium":
                    setMedium({
                        value,
                        required: false
                    });
                    break;
                case "numCopies":
                    setNumCopies({
                        value: parseInt(value),
                        required: false
                    });
                    break;
                case "description":
                    setDescription({
                        value,
                        required: false
                    });
                    break;
                default:
                    console.log('default');
            }
        };
        const handleOnSubmit = (event) => {
            event.preventDefault();
            if (!medium.value) {
                setMedium(Object.assign(Object.assign({}, medium), { required: true }));
            }
            if (!numCopies.value) {
                setNumCopies(Object.assign(Object.assign({}, numCopies), { required: true }));
            }
            if (!description.value) {
                setDescription(Object.assign(Object.assign({}, description), { required: true }));
            }
            if (!medium.value || !numCopies.value || !description.value) {
                return;
            }
            const token = sessionStorage.getItem("authorization").split(' ')[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_2.default
                .put(`${serverURL}/collection/${props.match.params.itemId}/update`, {
                medium: medium.value,
                numCopies: Number(numCopies.value),
                description: description.value
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .catch(err => console.log(err));
            setIsSubmitted(true);
            alert("Item successfully updated!");
        };
        if (isSubmitted) {
            return (0, jsx_runtime_8.jsx)(react_router_dom_4.Redirect, { to: '/home/collection' });
        }
        return ((0, jsx_runtime_8.jsxs)("section", Object.assign({ className: "edit-collection" }, { children: [(0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection__header-container" }, { children: [(0, jsx_runtime_8.jsx)(react_router_dom_4.Link, Object.assign({ to: '/home/collection', className: "edit-collection__header-link" }, { children: (0, jsx_runtime_8.jsx)("img", { src: arrow_back_black_svg_1.default, alt: "Back" }) })), (0, jsx_runtime_8.jsx)("h3", Object.assign({ className: "edit-collection__title" }, { children: "Edit Collection Item" }))] })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-album" }, { children: [(0, jsx_runtime_8.jsx)("div", Object.assign({ className: "edit-collection-album__img-container" }, { children: (0, jsx_runtime_8.jsx)("img", { src: collectionItem.image, alt: collectionItem.albumTitle, className: "edit-collection-album__img" }) })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-album__container" }, { children: [(0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-album__text-container" }, { children: [(0, jsx_runtime_8.jsxs)("article", Object.assign({ className: "edit-collection-album__info" }, { children: [(0, jsx_runtime_8.jsx)("h3", Object.assign({ className: "edit-collection-album__title" }, { children: "Album:" })), (0, jsx_runtime_8.jsx)("p", Object.assign({ className: "edit-collection-album__paragraph" }, { children: collectionItem.albumTitle }))] })), (0, jsx_runtime_8.jsxs)("article", Object.assign({ className: "edit-collection-album__info" }, { children: [(0, jsx_runtime_8.jsx)("h3", Object.assign({ className: "edit-collection-album__title" }, { children: "Artist:" })), (0, jsx_runtime_8.jsx)("p", Object.assign({ className: "edit-collection-album__paragraph" }, { children: collectionItem.artist }))] })), (0, jsx_runtime_8.jsxs)("article", Object.assign({ className: "edit-collection-album__info" }, { children: [(0, jsx_runtime_8.jsx)("h3", Object.assign({ className: "edit-collection-album__title" }, { children: "Release Date:" })), (0, jsx_runtime_8.jsx)("p", Object.assign({ className: "edit-collection-album__paragraph" }, { children: collectionItem.releaseDate }))] })), (0, jsx_runtime_8.jsxs)("article", Object.assign({ className: "edit-collection-album__info" }, { children: [(0, jsx_runtime_8.jsx)("h3", Object.assign({ className: "edit-collection-album__title" }, { children: "Number of Tracks:" })), (0, jsx_runtime_8.jsx)("p", Object.assign({ className: "edit-collection-album__paragraph" }, { children: collectionItem.numTracks }))] }))] })), (0, jsx_runtime_8.jsxs)("form", Object.assign({ onSubmit: handleOnSubmit, className: "edit-collection-form" }, { children: [(0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-form__container" }, { children: [(0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-form__group" }, { children: [(0, jsx_runtime_8.jsx)("label", Object.assign({ className: "edit-collection-form__label", htmlFor: "medium" }, { children: "Medium:" })), (0, jsx_runtime_8.jsxs)("select", Object.assign({ name: "medium", id: "medium", value: medium.value, onChange: handleOnChange, className: `edit-collection-form__select ${medium.required ? "edit-collection-form__select--invalid" : ""}` }, { children: [(0, jsx_runtime_8.jsx)("option", Object.assign({ value: "", disabled: true }, { children: "Please Select" })), (0, jsx_runtime_8.jsx)("option", Object.assign({ value: "CD" }, { children: "CD" })), (0, jsx_runtime_8.jsx)("option", Object.assign({ value: "Vinyl" }, { children: "Vinyl" })), (0, jsx_runtime_8.jsx)("option", Object.assign({ value: "Casette" }, { children: "Casette" }))] }))] })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-form__group" }, { children: [(0, jsx_runtime_8.jsx)("label", Object.assign({ className: "edit-collection-form__label", htmlFor: "numCopies" }, { children: "Number of Copies:" })), (0, jsx_runtime_8.jsx)("input", { type: "number", name: "numCopies", id: "numCopies", defaultValue: collectionItem.numCopies, onChange: handleOnChange, className: `edit-collection-form__input ${numCopies.required ? "edit-collection-form__input--invalid" : ""}` })] })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-form__group" }, { children: [(0, jsx_runtime_8.jsx)("label", Object.assign({ className: "edit-collection-form__label", htmlFor: "description" }, { children: "Description:" })), (0, jsx_runtime_8.jsx)("textarea", { name: "description", id: "description", defaultValue: collectionItem.description, onChange: handleOnChange, className: `edit-collection-form__textarea ${description.required ? "edit-collection-form__textarea--invalid" : ""}`, placeholder: "Provide a description..." })] }))] })), (0, jsx_runtime_8.jsxs)("div", Object.assign({ className: "edit-collection-form__buttons" }, { children: [(0, jsx_runtime_8.jsx)("button", Object.assign({ type: "submit", className: "edit-collection-form__button" }, { children: "Save" })), (0, jsx_runtime_8.jsx)(react_router_dom_4.Link, Object.assign({ to: '/home/collection' }, { children: (0, jsx_runtime_8.jsx)("button", Object.assign({ className: "edit-collection-form__button edit-collection-form__button--cancel" }, { children: "Cancel" })) }))] }))] }))] }))] }))] })));
    }
    exports.default = EditCollectionItemPage;
});
define("pages/EditCollectionItemPage/index", ["require", "exports", "pages/EditCollectionItemPage/EditCollectionItemPage"], function (require, exports, EditCollectionItemPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    EditCollectionItemPage_1 = __importDefault(EditCollectionItemPage_1);
    exports.default = EditCollectionItemPage_1.default;
});
define("pages/EditWishlistItemPage/EditWishlistItemPage", ["require", "exports", "react/jsx-runtime", "axios", "react", "react-router-dom", "../../assets/icons/arrow-back-black.svg", "./EditWishlistItemPage.scss"], function (require, exports, jsx_runtime_9, axios_3, react_6, react_router_dom_5, arrow_back_black_svg_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_3 = __importDefault(axios_3);
    arrow_back_black_svg_2 = __importDefault(arrow_back_black_svg_2);
    function EditWishlistItemPage(props) {
        const [wishlistItem, setWishlistItem] = (0, react_6.useState)({});
        const [medium, setMedium] = (0, react_6.useState)({
            value: "",
            required: false
        });
        const [numCopies, setNumCopies] = (0, react_6.useState)({
            value: 0,
            required: false
        });
        const [description, setDescription] = (0, react_6.useState)({
            value: "",
            required: false
        });
        const [isSubmitted, setIsSubmitted] = (0, react_6.useState)(false);
        (0, react_6.useEffect)(() => {
            const token = sessionStorage.getItem("authorization").split(' ')[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_3.default
                .get(`${serverURL}/wishlist/${props.match.params.itemId}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                setWishlistItem(response.data[0]);
                setMedium(Object.assign(Object.assign({}, medium), { value: response.data[0].medium }));
                setNumCopies(Object.assign(Object.assign({}, numCopies), { value: parseInt(response.data[0].numCopies) }));
                setDescription(Object.assign(Object.assign({}, description), { value: response.data[0].description }));
            })
                .catch(err => console.log(err));
            // eslint-disable-next-line
        }, []);
        const handleOnChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
                case "medium":
                    setMedium({
                        value,
                        required: false
                    });
                    break;
                case "numCopies":
                    setNumCopies({
                        value: parseInt(value),
                        required: false
                    });
                    break;
                case "description":
                    setDescription({
                        value,
                        required: false
                    });
                    break;
                default:
                    console.log('default');
            }
        };
        const handleOnSubmit = (event) => {
            event.preventDefault();
            if (!medium.value) {
                setMedium(Object.assign(Object.assign({}, medium), { required: true }));
            }
            if (!numCopies.value) {
                setNumCopies(Object.assign(Object.assign({}, numCopies), { required: true }));
            }
            if (!description.value) {
                setDescription(Object.assign(Object.assign({}, description), { required: true }));
            }
            if (!medium.value || !numCopies.value || !description.value) {
                return;
            }
            const token = sessionStorage.getItem("authorization").split(' ')[1];
            axios_3.default
                .put(`http://localhost:8080/wishlist/${props.match.params.itemId}/update`, {
                medium: medium.value,
                numCopies: Number(numCopies.value),
                description: description.value
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .catch(err => console.log(err));
            setIsSubmitted(true);
            alert("Item successfully updated!");
        };
        if (isSubmitted) {
            return (0, jsx_runtime_9.jsx)(react_router_dom_5.Redirect, { to: '/home/wishlist' });
        }
        return ((0, jsx_runtime_9.jsxs)("section", Object.assign({ className: "edit-wishlist" }, { children: [(0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist__header-container" }, { children: [(0, jsx_runtime_9.jsx)(react_router_dom_5.Link, Object.assign({ to: '/home/wishlist', className: "edit-wishlist__header-link" }, { children: (0, jsx_runtime_9.jsx)("img", { src: arrow_back_black_svg_2.default, alt: "Back" }) })), (0, jsx_runtime_9.jsx)("h3", Object.assign({ className: "edit-wishlist__title" }, { children: "Edit Wishlist Item" }))] })), (0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-album" }, { children: [(0, jsx_runtime_9.jsx)("div", Object.assign({ className: "edit-wishlist-album__img-container" }, { children: (0, jsx_runtime_9.jsx)("img", { src: wishlistItem.image, alt: wishlistItem.albumTitle, className: "edit-wishlist-album__img" }) })), (0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-album__container" }, { children: [(0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-album__text-container" }, { children: [(0, jsx_runtime_9.jsxs)("article", Object.assign({ className: "edit-wishlist-album__info" }, { children: [(0, jsx_runtime_9.jsx)("h3", Object.assign({ className: "edit-wishlist-album__title" }, { children: "Album:" })), (0, jsx_runtime_9.jsx)("p", Object.assign({ className: "edit-wishlist-album__paragraph" }, { children: wishlistItem.albumTitle }))] })), (0, jsx_runtime_9.jsxs)("article", Object.assign({ className: "edit-wishlist-album__info" }, { children: [(0, jsx_runtime_9.jsx)("h3", Object.assign({ className: "edit-wishlist-album__title" }, { children: "Artist:" })), (0, jsx_runtime_9.jsx)("p", Object.assign({ className: "edit-wishlist-album__paragraph" }, { children: wishlistItem.artist }))] })), (0, jsx_runtime_9.jsxs)("article", Object.assign({ className: "edit-wishlist-album__info" }, { children: [(0, jsx_runtime_9.jsx)("h3", Object.assign({ className: "edit-wishlist-album__title" }, { children: "Release Date:" })), (0, jsx_runtime_9.jsx)("p", Object.assign({ className: "edit-wishlist-album__paragraph" }, { children: wishlistItem.releaseDate }))] })), (0, jsx_runtime_9.jsxs)("article", Object.assign({ className: "edit-wishlist-album__info" }, { children: [(0, jsx_runtime_9.jsx)("h3", Object.assign({ className: "edit-wishlist-album__title" }, { children: "Number of Tracks:" })), (0, jsx_runtime_9.jsx)("p", Object.assign({ className: "edit-wishlist-album__paragraph" }, { children: wishlistItem.numTracks }))] }))] })), (0, jsx_runtime_9.jsxs)("form", Object.assign({ onSubmit: handleOnSubmit, className: "edit-wishlist-form" }, { children: [(0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-form__container" }, { children: [(0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-form__group" }, { children: [(0, jsx_runtime_9.jsx)("label", Object.assign({ className: "edit-wishlist-form__label", htmlFor: "medium" }, { children: "Medium:" })), (0, jsx_runtime_9.jsxs)("select", Object.assign({ name: "medium", id: "medium", value: medium.value, onChange: handleOnChange, className: `edit-wishlist-form__select ${medium.required ? "edit-wishlist-form__select--invalid" : ""}` }, { children: [(0, jsx_runtime_9.jsx)("option", Object.assign({ value: "", disabled: true }, { children: "Please Select" })), (0, jsx_runtime_9.jsx)("option", Object.assign({ value: "CD" }, { children: "CD" })), (0, jsx_runtime_9.jsx)("option", Object.assign({ value: "Vinyl" }, { children: "Vinyl" })), (0, jsx_runtime_9.jsx)("option", Object.assign({ value: "Casette" }, { children: "Casette" }))] }))] })), (0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-form__group" }, { children: [(0, jsx_runtime_9.jsx)("label", Object.assign({ className: "edit-wishlist-form__label", htmlFor: "numCopies" }, { children: "Number of Copies:" })), (0, jsx_runtime_9.jsx)("input", { type: "number", name: "numCopies", id: "numCopies", defaultValue: wishlistItem.numCopies, onChange: handleOnChange, className: `edit-wishlist-form__input ${numCopies.required ? "edit-wishlist-form__input--invalid" : ""}` })] })), (0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-form__group" }, { children: [(0, jsx_runtime_9.jsx)("label", Object.assign({ className: "edit-wishlist-form__label", htmlFor: "description" }, { children: "Description:" })), (0, jsx_runtime_9.jsx)("textarea", { name: "description", id: "description", defaultValue: wishlistItem.description, onChange: handleOnChange, className: `edit-wishlist-form__textarea ${description.required ? "edit-wishlist-form__textarea--invalid" : ""}`, placeholder: "Provide a description..." })] }))] })), (0, jsx_runtime_9.jsxs)("div", Object.assign({ className: "edit-wishlist-form__buttons" }, { children: [(0, jsx_runtime_9.jsx)("button", Object.assign({ type: "submit", className: "edit-wishlist-form__button" }, { children: "Save" })), (0, jsx_runtime_9.jsx)(react_router_dom_5.Link, Object.assign({ to: '/home/wishlist' }, { children: (0, jsx_runtime_9.jsx)("button", Object.assign({ className: "edit-wishlist-form__button edit-wishlist-form__button--cancel " }, { children: "Cancel" })) }))] }))] }))] }))] }))] })));
    }
    exports.default = EditWishlistItemPage;
});
define("pages/EditWishlistItemPage/index", ["require", "exports", "pages/EditWishlistItemPage/EditWishlistItemPage"], function (require, exports, EditWishlistItemPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    EditWishlistItemPage_1 = __importDefault(EditWishlistItemPage_1);
    exports.default = EditWishlistItemPage_1.default;
});
define("utils/Spotify", ["require", "exports", "axios"], function (require, exports, axios_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_4 = __importDefault(axios_4);
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    let accessToken;
    const Spotify = {
        getAccessToken() {
            if (accessToken) {
                return accessToken;
            }
            // check for access token match
            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
            if (accessTokenMatch && expiresInMatch) {
                accessToken = accessTokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', '', '/');
                return accessToken;
            }
            else {
                const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
                window.location = accessUrl;
            }
        },
        search(term) {
            const accessToken = Spotify.getAccessToken();
            return axios_4.default
                .get(`https://api.spotify.com/v1/search?type=album&q=${term}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
                .then((response) => {
                console.log(response);
                if (!response.data.albums) {
                    return [];
                }
                return response.data.albums.items.map((album) => ({
                    id: album.id,
                    image: album.images[1].url,
                    albumTitle: album.name,
                    artist: album.artists[0].name,
                    release_date: album.release_date,
                    num_tracks: album.total_tracks
                }));
            });
        }
    };
    exports.default = Spotify;
});
define("components/SearchBar/SearchBar", ["require", "exports", "react/jsx-runtime", "react", "./SearchBar.scss"], function (require, exports, jsx_runtime_10, react_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function SearchBar(props) {
        const [term, setTerm] = (0, react_7.useState)("");
        const handleTermChange = (event) => {
            setTerm(event.target.value);
        };
        const search = () => {
            props.onSearch(term);
        };
        return ((0, jsx_runtime_10.jsxs)("div", Object.assign({ className: "search__search-bar" }, { children: [(0, jsx_runtime_10.jsx)("input", { type: "text", placeholder: "Enter album or artist...", className: "search__input", value: term, onChange: handleTermChange }), (0, jsx_runtime_10.jsx)("button", Object.assign({ onClick: search, className: "search__button" }, { children: "Search" }))] })));
    }
    exports.default = SearchBar;
});
define("components/SearchBar/index", ["require", "exports", "components/SearchBar/SearchBar"], function (require, exports, SearchBar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SearchBar_1 = __importDefault(SearchBar_1);
    exports.default = SearchBar_1.default;
});
define("components/SearchResultForm/SearchResultForm", ["require", "exports", "react/jsx-runtime", "axios", "react", "jwt-decode", "./SearchResultForm.scss"], function (require, exports, jsx_runtime_11, axios_5, react_8, jwt_decode_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_5 = __importDefault(axios_5);
    jwt_decode_2 = __importDefault(jwt_decode_2);
    function SearchResultForm(props) {
        const [medium, setMedium] = (0, react_8.useState)({
            value: "",
            required: false
        });
        const [numCopies, setNumCopies] = (0, react_8.useState)({
            value: 0,
            required: false
        });
        const [description, setDescription] = (0, react_8.useState)({
            value: "",
            required: false
        });
        const [user, setUser] = (0, react_8.useState)({});
        (0, react_8.useEffect)(() => {
            if (sessionStorage.getItem("authorization")) {
                const token = sessionStorage.getItem("authorization").split(" ")[1];
                const decodedUser = (0, jwt_decode_2.default)(token);
                setUser(decodedUser);
            }
        }, []);
        const handleOnChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
                case "medium":
                    setMedium({
                        value,
                        required: false
                    });
                    break;
                case "numCopies":
                    setNumCopies({
                        value: parseInt(value),
                        required: false
                    });
                    break;
                case "description":
                    setDescription({
                        value,
                        required: false
                    });
                    break;
                default:
                    console.log('default');
            }
        };
        const addToCollection = (event) => {
            event.preventDefault();
            if (!medium.value) {
                setMedium(Object.assign(Object.assign({}, medium), { required: true }));
            }
            if (!numCopies.value) {
                setNumCopies(Object.assign(Object.assign({}, numCopies), { required: true }));
            }
            if (!description.value) {
                setDescription(Object.assign(Object.assign({}, description), { required: true }));
            }
            if (!medium.value || !numCopies.value || !description.value) {
                return;
            }
            const token = sessionStorage.getItem("authorization").split(" ")[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_5.default
                .post(`${serverURL}/collection`, {
                image: props.image,
                albumTitle: props.albumTitle,
                artist: props.artist,
                releaseDate: props.releaseDate,
                numTracks: props.numTracks,
                medium: medium.value,
                numCopies: Number(numCopies.value),
                description: description.value,
                userId: user.id
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(() => {
                setMedium(Object.assign(Object.assign({}, medium), { value: "" }));
                setNumCopies(Object.assign(Object.assign({}, numCopies), { value: 0 }));
                setDescription(Object.assign(Object.assign({}, description), { value: "" }));
            })
                .catch(err => console.log(err));
            alert("Album added to collection!");
        };
        const addToWishList = (event) => {
            event.preventDefault();
            if (!medium.value) {
                setMedium(Object.assign(Object.assign({}, medium), { required: true }));
            }
            if (!numCopies.value) {
                setNumCopies(Object.assign(Object.assign({}, numCopies), { required: true }));
            }
            if (!description.value) {
                setDescription(Object.assign(Object.assign({}, description), { required: true }));
            }
            if (!medium.value || !numCopies.value || !description.value) {
                return;
            }
            const token = sessionStorage.getItem("authorization").split(" ")[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_5.default
                .post(`${serverURL}/wishlist`, {
                image: props.image,
                albumTitle: props.albumTitle,
                artist: props.artist,
                releaseDate: props.releaseDate,
                numTracks: props.numTracks,
                medium: medium.value,
                numCopies: Number(numCopies.value),
                description: description.value,
                userId: user.id
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }).then(() => {
                setMedium(Object.assign(Object.assign({}, medium), { value: "" }));
                setNumCopies(Object.assign(Object.assign({}, numCopies), { value: 0 }));
                setDescription(Object.assign(Object.assign({}, description), { value: "" }));
            })
                .catch(err => console.log(err));
            alert("Album added to wishlist!");
        };
        return ((0, jsx_runtime_11.jsxs)("form", Object.assign({ className: "search-result-form" }, { children: [(0, jsx_runtime_11.jsxs)("div", Object.assign({ className: "search-result-form__container" }, { children: [(0, jsx_runtime_11.jsxs)("div", Object.assign({ className: "search-result-form__group" }, { children: [(0, jsx_runtime_11.jsx)("label", Object.assign({ className: "search-result-form__label", htmlFor: "medium" }, { children: "Medium:" })), (0, jsx_runtime_11.jsxs)("select", Object.assign({ name: "medium", id: "medium", value: medium.value, onChange: handleOnChange, className: `search-result-form__select ${medium.required ? "search-result-form__select--invalid" : ""}` }, { children: [(0, jsx_runtime_11.jsx)("option", Object.assign({ value: "", disabled: true }, { children: "Please Select" })), (0, jsx_runtime_11.jsx)("option", Object.assign({ value: "CD" }, { children: "CD" })), (0, jsx_runtime_11.jsx)("option", Object.assign({ value: "Vinyl" }, { children: "Vinyl" })), (0, jsx_runtime_11.jsx)("option", Object.assign({ value: "Casette" }, { children: "Casette" }))] }))] })), (0, jsx_runtime_11.jsxs)("div", Object.assign({ className: "search-result-form__group" }, { children: [(0, jsx_runtime_11.jsx)("label", Object.assign({ className: "search-result-form__label", htmlFor: "numCopies" }, { children: "Number of Copies:" })), (0, jsx_runtime_11.jsx)("input", { type: "number", name: "numCopies", id: "numCopies", value: numCopies.value, min: 1, onChange: (event) => handleOnChange(event), className: `search-result-form__input ${numCopies.required ? "search-result-form__input--invalid" : ""}` })] })), (0, jsx_runtime_11.jsxs)("div", Object.assign({ className: "search-result-form__group" }, { children: [(0, jsx_runtime_11.jsx)("label", Object.assign({ className: "search-result-form__label", htmlFor: "description" }, { children: "Description:" })), (0, jsx_runtime_11.jsx)("textarea", { name: "description", id: "description", value: description.value, onChange: (event) => handleOnChange(event), className: `search-result-form__textarea ${description.required ? "search-result-form__textarea--invalid" : ""}`, placeholder: "Provide a description..." })] }))] })), (0, jsx_runtime_11.jsxs)("div", Object.assign({ className: "search-result-form__buttons" }, { children: [(0, jsx_runtime_11.jsx)("button", Object.assign({ onClick: (event) => {
                                addToCollection(event);
                            }, className: "search-result-form__button" }, { children: "+ Add to Collection" })), (0, jsx_runtime_11.jsx)("button", Object.assign({ onClick: (event) => addToWishList(event), className: "search-result-form__button" }, { children: "+ Add to Wishlist" }))] }))] })));
    }
    exports.default = SearchResultForm;
});
define("components/SearchResults/SearchResults", ["require", "exports", "react/jsx-runtime", "components/SearchResultForm/SearchResultForm", "./SearchResults.scss"], function (require, exports, jsx_runtime_12, SearchResultForm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SearchResultForm_1 = __importDefault(SearchResultForm_1);
    function SearchResults(props) {
        return ((0, jsx_runtime_12.jsx)("div", Object.assign({ className: "search-results__container" }, { children: (0, jsx_runtime_12.jsx)("ul", Object.assign({ className: "search-results__list" }, { children: props.searchResults.map((searchResult, i) => {
                    return ((0, jsx_runtime_12.jsxs)("li", Object.assign({ className: "search-result", style: {
                            opacity: 0,
                            animation: `fade-in .5s ${i * .25}s ease-out forwards`
                        } }, { children: [(0, jsx_runtime_12.jsx)("div", Object.assign({ className: "search-result__img-container" }, { children: (0, jsx_runtime_12.jsx)("img", { className: "search-result__img", src: searchResult.image, alt: searchResult.albumTitle }) })), (0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "search-result__container" }, { children: [(0, jsx_runtime_12.jsxs)("div", Object.assign({ className: "search-result__text-container" }, { children: [(0, jsx_runtime_12.jsxs)("article", Object.assign({ className: "search-result__info" }, { children: [(0, jsx_runtime_12.jsx)("h3", Object.assign({ className: "search-result__title" }, { children: "Album:" })), (0, jsx_runtime_12.jsx)("p", Object.assign({ className: "search-result__paragraph" }, { children: searchResult.albumTitle }))] })), (0, jsx_runtime_12.jsxs)("article", Object.assign({ className: "search-result__info" }, { children: [(0, jsx_runtime_12.jsx)("h3", Object.assign({ className: "search-result__title" }, { children: "Artist:" })), (0, jsx_runtime_12.jsx)("p", Object.assign({ className: "search-result__paragraph" }, { children: searchResult.artist }))] })), (0, jsx_runtime_12.jsxs)("article", Object.assign({ className: "search-result__info" }, { children: [(0, jsx_runtime_12.jsx)("h3", Object.assign({ className: "search-result__title" }, { children: "Release Date:" })), (0, jsx_runtime_12.jsx)("p", Object.assign({ className: "search-result__paragraph" }, { children: searchResult.release_date }))] })), (0, jsx_runtime_12.jsxs)("article", Object.assign({ className: "search-result__info" }, { children: [(0, jsx_runtime_12.jsx)("h3", Object.assign({ className: "search-result__title" }, { children: "Number of Tracks:" })), (0, jsx_runtime_12.jsx)("p", Object.assign({ className: "search-result__paragraph" }, { children: searchResult.num_tracks }))] }))] })), (0, jsx_runtime_12.jsx)(SearchResultForm_1.default, { image: searchResult.image, albumTitle: searchResult.albumTitle, artist: searchResult.artist, releaseDate: searchResult.release_date, numTracks: searchResult.num_tracks })] }))] }), searchResult.id));
                }) })) })));
    }
    exports.default = SearchResults;
});
define("components/SearchResults/index", ["require", "exports", "components/SearchResults/SearchResults"], function (require, exports, SearchResults_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SearchResults_1 = __importDefault(SearchResults_1);
    exports.default = SearchResults_1.default;
});
define("pages/SearchPage/SearchPage", ["require", "exports", "react/jsx-runtime", "utils/Spotify", "react", "components/SearchBar/index", "components/SearchResults/index", "./SearchPage.scss"], function (require, exports, jsx_runtime_13, Spotify_1, react_9, SearchBar_2, SearchResults_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Spotify_1 = __importDefault(Spotify_1);
    SearchBar_2 = __importDefault(SearchBar_2);
    SearchResults_2 = __importDefault(SearchResults_2);
    function SearchPage() {
        const [searchResults, setSearchResults] = (0, react_9.useState)([]);
        const search = (term) => {
            Spotify_1.default
                .search(term)
                .then((searchResults) => setSearchResults(searchResults))
                .catch(err => console.log(err));
        };
        return ((0, jsx_runtime_13.jsxs)("section", Object.assign({ className: "search" }, { children: [(0, jsx_runtime_13.jsx)("h3", Object.assign({ className: "search__title" }, { children: "Search" })), (0, jsx_runtime_13.jsx)(SearchBar_2.default, { onSearch: search }), (0, jsx_runtime_13.jsx)(SearchResults_2.default, { searchResults: searchResults })] })));
    }
    exports.default = SearchPage;
});
define("pages/SearchPage/index", ["require", "exports", "pages/SearchPage/SearchPage"], function (require, exports, SearchPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SearchPage_1 = __importDefault(SearchPage_1);
    exports.default = SearchPage_1.default;
});
define("components/WishList/WishList", ["require", "exports", "react/jsx-runtime", "components/AlbumItem/index", "./WishList.scss"], function (require, exports, jsx_runtime_14, AlbumItem_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AlbumItem_3 = __importDefault(AlbumItem_3);
    function WishList(props) {
        return ((0, jsx_runtime_14.jsx)("div", Object.assign({ className: "wishlist__list-container" }, { children: (props.wishlist.length) === 0 ?
                (0, jsx_runtime_14.jsx)("p", Object.assign({ className: "wishlist__empty-list" }, { children: "Nothing to see here...yet" })) :
                (0, jsx_runtime_14.jsx)("ul", Object.assign({ className: "wishlist__list" }, { children: props.wishlist.map((album, i) => {
                        return (0, jsx_runtime_14.jsx)(AlbumItem_3.default, { id: album.id, album: album, index: i, image: album.image, albumTitle: album.albumTitle, artist: album.artist, releaseDate: album.releaseDate, numTracks: album.numTracks, medium: album.medium, numCopies: album.numCopies, description: album.description, handleOnClickCollection: props.handleOnClickCollection, handleOnClickDelete: props.handleOnClickDelete }, album.id);
                    }) })) })));
    }
    exports.default = WishList;
});
define("pages/WishListPage/WishListPage", ["require", "exports", "react/jsx-runtime", "react", "jwt-decode", "axios", "components/WishList/WishList", "./WishListPage.scss"], function (require, exports, jsx_runtime_15, react_10, jwt_decode_3, axios_6, WishList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jwt_decode_3 = __importDefault(jwt_decode_3);
    axios_6 = __importDefault(axios_6);
    WishList_1 = __importDefault(WishList_1);
    function WishListPage() {
        const [wishlist, setWishlist] = (0, react_10.useState)([]);
        const [user, setUser] = (0, react_10.useState)({});
        (0, react_10.useEffect)(() => {
            if (sessionStorage.getItem("authorization")) {
                const token = sessionStorage.getItem("authorization").split(" ")[1];
                const decodedUser = (0, jwt_decode_3.default)(token);
                setUser(decodedUser);
                const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
                axios_6.default
                    .get(`${serverURL}/wishlist`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                    setWishlist(response.data);
                });
            }
        }, []);
        const handleOnClickDelete = (id) => {
            const token = sessionStorage.getItem("authorization").split(" ")[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_6.default
                .delete(`${serverURL}/wishlist/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(() => {
                axios_6.default
                    .get(`${serverURL}/wishlist`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                    setWishlist(response.data);
                })
                    .catch(err => console.log(err));
            })
                .catch(err => console.log(err));
        };
        const handleOnClickCollection = (album, id) => {
            const token = sessionStorage.getItem("authorization").split(" ")[1];
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_6.default
                .post(`${serverURL}/collection`, {
                image: album.image,
                albumTitle: album.albumTitle,
                artist: album.artist,
                releaseDate: album.releaseDate,
                numTracks: album.numTracks,
                medium: album.medium,
                numCopies: album.numCopies,
                description: album.description,
                userId: user.id
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(() => {
                axios_6.default
                    .delete(`${serverURL}/wishlist/${id}`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                    axios_6.default
                        .get(`${serverURL}/wishlist`, {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    })
                        .then((response) => {
                        setWishlist(response.data);
                    })
                        .catch(err => console.log(err));
                })
                    .catch(err => console.log(err));
            })
                .catch(err => console.log(err));
            alert("Item successfully posted to your collection!");
        };
        return ((0, jsx_runtime_15.jsxs)("section", Object.assign({ className: "wishlist" }, { children: [(0, jsx_runtime_15.jsx)("h3", Object.assign({ className: "wishlist__title" }, { children: "Your Wishlist" })), (0, jsx_runtime_15.jsx)(WishList_1.default, { wishlist: wishlist, handleOnClickDelete: handleOnClickDelete, handleOnClickCollection: handleOnClickCollection })] })));
    }
    exports.default = WishListPage;
});
define("pages/WishListPage/index", ["require", "exports", "pages/WishListPage/WishListPage"], function (require, exports, WishListPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WishListPage_1 = __importDefault(WishListPage_1);
    exports.default = WishListPage_1.default;
});
define("pages/AddAlbumPage/AddAlbumPage", ["require", "exports", "react/jsx-runtime", "react", "jwt-decode", "react-router-dom", "axios", "./AddAlbumPage.scss"], function (require, exports, jsx_runtime_16, react_11, jwt_decode_4, react_router_dom_6, axios_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jwt_decode_4 = __importDefault(jwt_decode_4);
    axios_7 = __importDefault(axios_7);
    function AddAlbumPage() {
        const formRef = (0, react_11.useRef)(null);
        const token = sessionStorage.getItem("authorization").split(' ')[1];
        const decodedUser = (0, jwt_decode_4.default)(token);
        // eslint-disable-next-line
        const [user, setUser] = (0, react_11.useState)(decodedUser);
        const [image, setImage] = (0, react_11.useState)({
            value: [],
            required: false
        });
        const [albumTitle, setAlbumTitle] = (0, react_11.useState)({
            value: "",
            required: false
        });
        const [artist, setArtist] = (0, react_11.useState)({
            value: "",
            required: false
        });
        const [releaseDate, setReleaseDate] = (0, react_11.useState)({
            value: "",
            required: false
        });
        const [numTracks, setNumTracks] = (0, react_11.useState)({
            value: '',
            required: false
        });
        const [medium, setMedium] = (0, react_11.useState)({
            value: "",
            required: false
        });
        const [numCopies, setNumCopies] = (0, react_11.useState)({
            value: '',
            required: false
        });
        const [description, setDescription] = (0, react_11.useState)({
            value: "",
            required: false
        });
        const [isSubmitted, setIsSubmitted] = (0, react_11.useState)(false);
        const handleOnChange = (event) => {
            const { name, value } = event.target;
            const files = event.target.files;
            switch (name) {
                case "image":
                    setImage({
                        value: files[0],
                        required: false
                    });
                    break;
                case "albumTitle":
                    setAlbumTitle({
                        value,
                        required: false
                    });
                    break;
                case "artist":
                    setArtist({
                        value,
                        required: false
                    });
                    break;
                case "releaseDate":
                    setReleaseDate({
                        value,
                        required: false
                    });
                    break;
                case "numTracks":
                    setNumTracks({
                        value,
                        required: false
                    });
                    break;
                case "medium":
                    setMedium({
                        value,
                        required: false
                    });
                    break;
                case "numCopies":
                    setNumCopies({
                        value,
                        required: false
                    });
                    break;
                case "description":
                    setDescription({
                        value,
                        required: false
                    });
                    break;
                default:
                    console.log('default');
            }
        };
        const handleOnSubmit = (event) => {
            event.preventDefault();
            if (!image.value) {
                setImage(Object.assign(Object.assign({}, image), { required: true }));
            }
            if (!albumTitle.value) {
                setAlbumTitle(Object.assign(Object.assign({}, albumTitle), { required: true }));
            }
            if (!artist.value) {
                setArtist(Object.assign(Object.assign({}, artist), { required: true }));
            }
            if (!releaseDate.value) {
                setReleaseDate(Object.assign(Object.assign({}, releaseDate), { required: true }));
            }
            if (!numTracks.value) {
                setNumTracks(Object.assign(Object.assign({}, medium), { required: true }));
            }
            if (!medium.value) {
                setMedium(Object.assign(Object.assign({}, medium), { required: true }));
            }
            if (!numCopies.value) {
                setNumCopies(Object.assign(Object.assign({}, numCopies), { required: true }));
            }
            if (!description.value) {
                setDescription(Object.assign(Object.assign({}, description), { required: true }));
            }
            if (!image.value || !albumTitle.value || !artist.value || !releaseDate.value || !numTracks.value || !medium.value || !numCopies.value || !description.value) {
                return;
            }
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            const fd = new FormData(formRef.current);
            axios_7.default
                .post(`${serverURL}/collection/add-new-album`, fd, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .catch(err => console.log(err));
            alert('Album added successfully');
            setIsSubmitted(true);
        };
        if (isSubmitted) {
            return (0, jsx_runtime_16.jsx)(react_router_dom_6.Redirect, { to: '/home/collection' });
        }
        return ((0, jsx_runtime_16.jsxs)("section", Object.assign({ className: "add-album" }, { children: [(0, jsx_runtime_16.jsx)("h3", Object.assign({ className: "add-album__title" }, { children: "Add New Album" })), (0, jsx_runtime_16.jsx)("p", Object.assign({ className: "add-album__paragraph" }, { children: "Own an album that can't be found in our search?" })), (0, jsx_runtime_16.jsx)("p", Object.assign({ className: "add-album__paragraph" }, { children: "No worries! Add an album to your collection using this form." })), (0, jsx_runtime_16.jsxs)("form", Object.assign({ className: 'add-album-form', encType: 'multipart/form-data', onSubmit: handleOnSubmit, ref: formRef }, { children: [(0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "image", className: "add-album-form__label" }, { children: "Album Image:" })), (0, jsx_runtime_16.jsx)("input", { type: "file", name: "image", id: "image", accept: "image/png, image/jpeg", onChange: (event) => handleOnChange(event), className: 'add-album-form__file' }), image.required ? (0, jsx_runtime_16.jsx)("p", Object.assign({ className: "add-album-form__required-message" }, { children: "Please select a file" })) : ""] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "albumTitle", className: "add-album-form__label" }, { children: "Album Title:" })), (0, jsx_runtime_16.jsx)("input", { type: "text", id: "albumTitle", name: 'albumTitle', value: albumTitle.value, onChange: (event) => handleOnChange(event), placeholder: 'Enter album name', className: `add-album-form__input ${albumTitle.required ? "add-album-form__input--invalid" : ""}` })] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "artist", className: "add-album-form__label" }, { children: "Artist:" })), (0, jsx_runtime_16.jsx)("input", { type: "text", id: "artist", name: 'artist', value: artist.value, onChange: (event) => handleOnChange(event), placeholder: 'Enter artist name', className: `add-album-form__input ${artist.required ? "add-album-form__input--invalid" : ""}` })] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "releaseDate", className: "add-album-form__label" }, { children: "Release Date:" })), (0, jsx_runtime_16.jsx)("input", { type: "text", id: "releaseDate", name: "releaseDate", value: releaseDate.value, onChange: (event) => handleOnChange(event), placeholder: 'yyyy or yyyy-mm-dd', className: `add-album-form__input ${releaseDate.required ? "add-album-form__input--invalid" : ""}` })] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "numTracks", className: "add-album-form__label" }, { children: "Number of Tracks:" })), (0, jsx_runtime_16.jsx)("input", { type: "number", id: "numTracks", name: "numTracks", value: numTracks.value, onChange: (event) => handleOnChange(event), min: 1, placeholder: "1", className: `add-album-form__input add-album-form__input--number ${numTracks.required ? "add-album-form__input--invalid" : ""}` })] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "medium", className: "add-album-form__label" }, { children: "Medium:" })), (0, jsx_runtime_16.jsxs)("select", Object.assign({ name: "medium", id: "medium", value: medium.value, onChange: (event) => handleOnChange(event), className: `add-album-form__select ${medium.required ? "add-album-form__select--invalid" : ""}` }, { children: [(0, jsx_runtime_16.jsx)("option", Object.assign({ value: "", disabled: true }, { children: "Please Select" })), (0, jsx_runtime_16.jsx)("option", Object.assign({ value: "CD" }, { children: "CD" })), (0, jsx_runtime_16.jsx)("option", Object.assign({ value: "Vinyl" }, { children: "Vinyl" })), (0, jsx_runtime_16.jsx)("option", Object.assign({ value: "Cassette" }, { children: "Cassette" }))] }))] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "numCopies", className: "add-album-form__label" }, { children: "Number of Copies:" })), (0, jsx_runtime_16.jsx)("input", { type: "number", id: "numCopies", name: "numCopies", value: numCopies.value, onChange: (event) => handleOnChange(event), className: `add-album-form__input add-album-form__input--number ${numCopies.required ? "add-album-form__input--invalid" : ""}`, min: 1, placeholder: "0" })] })), (0, jsx_runtime_16.jsxs)("div", Object.assign({ className: "add-album-form__group" }, { children: [(0, jsx_runtime_16.jsx)("label", Object.assign({ htmlFor: "description", className: "add-album-form__label" }, { children: "Description:" })), (0, jsx_runtime_16.jsx)("textarea", { name: "description", id: "description", value: description.value, onChange: (event) => handleOnChange(event), className: `add-album-form__textarea ${description.required ? "add-album-form__textarea--invalid" : ""}`, placeholder: 'Please enter a description...' })] })), (0, jsx_runtime_16.jsx)("input", { type: "hidden", id: "userId", name: "userId", value: user.id }), (0, jsx_runtime_16.jsx)("div", Object.assign({ className: "add-album-form__button-container" }, { children: (0, jsx_runtime_16.jsx)("button", Object.assign({ type: "submit", className: 'add-album-form__button' }, { children: "+ Add to Collection" })) }))] }))] })));
    }
    exports.default = AddAlbumPage;
});
define("pages/AddAlbumPage/index", ["require", "exports", "pages/AddAlbumPage/AddAlbumPage"], function (require, exports, AddAlbumPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AddAlbumPage_1 = __importDefault(AddAlbumPage_1);
    exports.default = AddAlbumPage_1.default;
});
define("components/Card/Card", ["require", "exports", "react/jsx-runtime", "react-router-dom", "pages/CollectionPage/index", "pages/EditCollectionItemPage/index", "pages/EditWishlistItemPage/index", "pages/SearchPage/index", "pages/WishListPage/index", "pages/AddAlbumPage/index", "./Card.scss"], function (require, exports, jsx_runtime_17, react_router_dom_7, CollectionPage_2, EditCollectionItemPage_2, EditWishlistItemPage_2, SearchPage_2, WishListPage_2, AddAlbumPage_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CollectionPage_2 = __importDefault(CollectionPage_2);
    EditCollectionItemPage_2 = __importDefault(EditCollectionItemPage_2);
    EditWishlistItemPage_2 = __importDefault(EditWishlistItemPage_2);
    SearchPage_2 = __importDefault(SearchPage_2);
    WishListPage_2 = __importDefault(WishListPage_2);
    AddAlbumPage_2 = __importDefault(AddAlbumPage_2);
    function Card() {
        return ((0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "main__card" }, { children: [(0, jsx_runtime_17.jsxs)("div", Object.assign({ className: "main__button-container" }, { children: [(0, jsx_runtime_17.jsx)(react_router_dom_7.Link, Object.assign({ to: "/home/collection" }, { children: (0, jsx_runtime_17.jsx)("button", Object.assign({ className: "main__button" }, { children: "Collection" })) })), (0, jsx_runtime_17.jsx)(react_router_dom_7.Link, Object.assign({ to: "/home/wishlist" }, { children: (0, jsx_runtime_17.jsx)("button", Object.assign({ className: "main__button" }, { children: "Wishlist" })) })), (0, jsx_runtime_17.jsx)(react_router_dom_7.Link, Object.assign({ to: "/home/search" }, { children: (0, jsx_runtime_17.jsx)("button", Object.assign({ className: "main__button main__button--no-margin" }, { children: "Search" })) })), (0, jsx_runtime_17.jsx)(react_router_dom_7.Link, Object.assign({ to: "/home/add-album" }, { children: (0, jsx_runtime_17.jsx)("button", Object.assign({ className: "main__button main__button--no-margin" }, { children: "Add An Album" })) }))] })), (0, jsx_runtime_17.jsxs)(react_router_dom_7.Switch, { children: [(0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/', exact: true, component: CollectionPage_2.default }), (0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/home', exact: true, component: CollectionPage_2.default }), (0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/home/collection', exact: true, component: CollectionPage_2.default }), (0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/home/collection/:itemId/edit', component: EditCollectionItemPage_2.default }), (0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/home/wishlist', exact: true, component: WishListPage_2.default }), (0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/home/wishlist/:itemId/edit', component: EditWishlistItemPage_2.default }), (0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/home/search', component: SearchPage_2.default }), (0, jsx_runtime_17.jsx)(react_router_dom_7.Route, { path: '/home/add-album', component: AddAlbumPage_2.default })] })] })));
    }
    exports.default = Card;
});
define("components/Card/index", ["require", "exports", "components/Card/Card"], function (require, exports, Card_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Card_1 = __importDefault(Card_1);
    exports.default = Card_1.default;
});
define("components/HomeMain/HomeMain", ["require", "exports", "react/jsx-runtime", "components/Card/index", "./HomeMain.scss"], function (require, exports, jsx_runtime_18, Card_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Card_2 = __importDefault(Card_2);
    function HomeMain() {
        return ((0, jsx_runtime_18.jsx)("main", Object.assign({ className: "main" }, { children: (0, jsx_runtime_18.jsx)("div", Object.assign({ className: "main__wrapper" }, { children: (0, jsx_runtime_18.jsx)(Card_2.default, {}) })) })));
    }
    exports.default = HomeMain;
});
define("components/HomeMain/index", ["require", "exports", "components/HomeMain/HomeMain"], function (require, exports, HomeMain_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HomeMain_1 = __importDefault(HomeMain_1);
    exports.default = HomeMain_1.default;
});
define("pages/HomePage/HomePage", ["require", "exports", "react/jsx-runtime", "react", "react-router-dom", "components/Hero/index", "components/HomeMain/index", "components/PageFooter/index", "components/PageHeader/index"], function (require, exports, jsx_runtime_19, react_12, react_router_dom_8, Hero_2, HomeMain_2, PageFooter_3, PageHeader_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Hero_2 = __importDefault(Hero_2);
    HomeMain_2 = __importDefault(HomeMain_2);
    PageFooter_3 = __importDefault(PageFooter_3);
    PageHeader_3 = __importDefault(PageHeader_3);
    function HomePage() {
        const [hasAccess, setHasAccess] = (0, react_12.useState)(false);
        (0, react_12.useEffect)(() => {
            if (sessionStorage.getItem("authorization")) {
                setHasAccess(true);
            }
        }, []);
        if (!hasAccess) {
            return ((0, jsx_runtime_19.jsxs)(jsx_runtime_19.Fragment, { children: [(0, jsx_runtime_19.jsx)("p", { children: "Error 403: Access forbidden" }), (0, jsx_runtime_19.jsx)(react_router_dom_8.Link, Object.assign({ to: '/' }, { children: "Click here to go back" }))] }));
        }
        return ((0, jsx_runtime_19.jsxs)(jsx_runtime_19.Fragment, { children: [(0, jsx_runtime_19.jsx)(PageHeader_3.default, {}), (0, jsx_runtime_19.jsx)(Hero_2.default, {}), (0, jsx_runtime_19.jsx)(HomeMain_2.default, {}), (0, jsx_runtime_19.jsx)(PageFooter_3.default, {})] }));
    }
    exports.default = HomePage;
});
define("components/LandingPageHeader/LandingPageHeader", ["require", "exports", "react/jsx-runtime", "react-router-dom", "../../assets/icons/album-white-36.svg", "./LandingPageHeader.scss"], function (require, exports, jsx_runtime_20, react_router_dom_9, album_white_36_svg_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    album_white_36_svg_2 = __importDefault(album_white_36_svg_2);
    function LandingPageHeader() {
        return ((0, jsx_runtime_20.jsx)("header", Object.assign({ className: "header" }, { children: (0, jsx_runtime_20.jsxs)("div", Object.assign({ className: "header__wrapper" }, { children: [(0, jsx_runtime_20.jsxs)("div", Object.assign({ className: "header__container" }, { children: [(0, jsx_runtime_20.jsx)(react_router_dom_9.Link, Object.assign({ to: "/", className: "header__link" }, { children: (0, jsx_runtime_20.jsx)("img", { src: album_white_36_svg_2.default, alt: "album", className: "header__image" }) })), (0, jsx_runtime_20.jsx)(react_router_dom_9.Link, Object.assign({ to: "/", className: "header__link" }, { children: (0, jsx_runtime_20.jsx)("h1", Object.assign({ className: "header__title" }, { children: "Collectify" })) }))] })), (0, jsx_runtime_20.jsx)("div", Object.assign({ className: "header__container" }, { children: (0, jsx_runtime_20.jsx)("nav", Object.assign({ className: "header__nav" }, { children: (0, jsx_runtime_20.jsxs)("ul", Object.assign({ className: "header__nav-list" }, { children: [(0, jsx_runtime_20.jsx)("li", Object.assign({ className: "header__nav-item" }, { children: (0, jsx_runtime_20.jsx)(react_router_dom_9.NavLink, Object.assign({ to: "/login", className: "header__link", activeClassName: "header__link--active" }, { children: "Login" })) })), (0, jsx_runtime_20.jsx)("li", Object.assign({ className: "header__nav-item" }, { children: (0, jsx_runtime_20.jsx)(react_router_dom_9.NavLink, Object.assign({ to: "/signup", className: "header__link", activeClassName: "header__link--active" }, { children: "SignUp" })) }))] })) })) }))] })) })));
    }
    exports.default = LandingPageHeader;
});
define("components/LandingPageHeader/index", ["require", "exports", "components/LandingPageHeader/LandingPageHeader"], function (require, exports, LandingPageHeader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    LandingPageHeader_1 = __importDefault(LandingPageHeader_1);
    exports.default = LandingPageHeader_1.default;
});
define("pages/LandingPage/LandingPage", ["require", "exports", "react/jsx-runtime", "components/LandingPageHeader/index", "react-router-dom", "components/PageFooter/index", "../../assets/images/spotify-logo.png", "../../assets/images/vinyl-record.png", "../../assets/images/wish-list.png", "./LandingPage.scss"], function (require, exports, jsx_runtime_21, LandingPageHeader_2, react_router_dom_10, PageFooter_4, spotify_logo_png_1, vinyl_record_png_1, wish_list_png_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    LandingPageHeader_2 = __importDefault(LandingPageHeader_2);
    PageFooter_4 = __importDefault(PageFooter_4);
    spotify_logo_png_1 = __importDefault(spotify_logo_png_1);
    vinyl_record_png_1 = __importDefault(vinyl_record_png_1);
    wish_list_png_1 = __importDefault(wish_list_png_1);
    function LandingPage() {
        return ((0, jsx_runtime_21.jsxs)(jsx_runtime_21.Fragment, { children: [(0, jsx_runtime_21.jsx)(LandingPageHeader_2.default, {}), (0, jsx_runtime_21.jsxs)("main", Object.assign({ className: 'landing' }, { children: [(0, jsx_runtime_21.jsx)("section", Object.assign({ className: 'landing__section landing__info' }, { children: (0, jsx_runtime_21.jsx)("div", Object.assign({ className: "landing__wrapper landing__wrapper--special" }, { children: (0, jsx_runtime_21.jsxs)("div", Object.assign({ className: "landing__text-container landing__text-container--special" }, { children: [(0, jsx_runtime_21.jsx)("h2", Object.assign({ className: 'landing__title' }, { children: "Welcome to Collectify!" })), (0, jsx_runtime_21.jsx)("p", Object.assign({ className: 'landing__paragraph' }, { children: "Collectify helps a user to archive their physical music collection with ease!" }))] })) })) })), (0, jsx_runtime_21.jsx)("section", Object.assign({ className: 'landing__section landing__search' }, { children: (0, jsx_runtime_21.jsxs)("div", Object.assign({ className: "landing__wrapper" }, { children: [(0, jsx_runtime_21.jsx)("div", Object.assign({ className: "landing__image-container" }, { children: (0, jsx_runtime_21.jsx)("img", { src: spotify_logo_png_1.default, alt: "Spotify", className: 'landing__image' }) })), (0, jsx_runtime_21.jsxs)("div", Object.assign({ className: "landing__text-container" }, { children: [(0, jsx_runtime_21.jsx)("h2", Object.assign({ className: 'landing__title' }, { children: "Searching for albums?" })), (0, jsx_runtime_21.jsx)("p", Object.assign({ className: 'landing__paragraph' }, { children: "Our search functionality makes use of Spotify to find whatever album you are looking for." })), (0, jsx_runtime_21.jsx)("p", Object.assign({ className: 'landing__paragraph' }, { children: "If the album you are looking for doesn't exist, you can easily add it to your collection through our Add New Album feature!" }))] }))] })) })), (0, jsx_runtime_21.jsx)("section", Object.assign({ className: 'landing__section landing__wishlists' }, { children: (0, jsx_runtime_21.jsxs)("div", Object.assign({ className: "landing__wrapper" }, { children: [(0, jsx_runtime_21.jsxs)("div", Object.assign({ className: "landing__text-container" }, { children: [(0, jsx_runtime_21.jsx)("h2", Object.assign({ className: 'landing__title' }, { children: "Wishlists" })), (0, jsx_runtime_21.jsx)("p", Object.assign({ className: 'landing__paragraph' }, { children: "You can even create a wishlist of albums you would like to one day own! Once you own it you can add it to your collection with the click of a button." }))] })), (0, jsx_runtime_21.jsx)("div", Object.assign({ className: "landing__image-container landing__image-container--special" }, { children: (0, jsx_runtime_21.jsx)("img", { src: wish_list_png_1.default, alt: "Wishlist", className: 'landing__image' }) }))] })) })), (0, jsx_runtime_21.jsx)("section", Object.assign({ className: 'landing__section landing__get-started' }, { children: (0, jsx_runtime_21.jsxs)("div", Object.assign({ className: "landing__wrapper" }, { children: [(0, jsx_runtime_21.jsx)("div", Object.assign({ className: "landing__image-container" }, { children: (0, jsx_runtime_21.jsx)("img", { src: vinyl_record_png_1.default, alt: "Vinyl record", className: 'landing__image' }) })), (0, jsx_runtime_21.jsxs)("div", Object.assign({ className: "landing__text-container" }, { children: [(0, jsx_runtime_21.jsx)("h2", Object.assign({ className: 'landing__title' }, { children: "Get Started" })), (0, jsx_runtime_21.jsx)("p", Object.assign({ className: 'landing__paragraph' }, { children: "Become a member and start building your collection today!" })), (0, jsx_runtime_21.jsx)(react_router_dom_10.Link, Object.assign({ to: '/signup' }, { children: (0, jsx_runtime_21.jsx)("button", Object.assign({ className: 'landing__button' }, { children: "Sign Up!" })) }))] }))] })) }))] })), (0, jsx_runtime_21.jsx)(PageFooter_4.default, {})] }));
    }
    exports.default = LandingPage;
});
define("pages/LandingPage/index", ["require", "exports", "pages/LandingPage/LandingPage"], function (require, exports, LandingPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    LandingPage_1 = __importDefault(LandingPage_1);
    exports.default = LandingPage_1.default;
});
define("pages/LoginPage/LoginPage", ["require", "exports", "react/jsx-runtime", "axios", "react", "react-router-dom", "../../assets/icons/album-white-36.svg", "components/LandingPageHeader/index", "components/PageFooter/index", "./LoginPage.scss"], function (require, exports, jsx_runtime_22, axios_8, react_13, react_router_dom_11, album_white_36_svg_3, LandingPageHeader_3, PageFooter_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_8 = __importDefault(axios_8);
    album_white_36_svg_3 = __importDefault(album_white_36_svg_3);
    LandingPageHeader_3 = __importDefault(LandingPageHeader_3);
    PageFooter_5 = __importDefault(PageFooter_5);
    function LoginPage() {
        const [username, setUsername] = (0, react_13.useState)({
            value: "",
            required: false
        });
        const [password, setPassword] = (0, react_13.useState)({
            value: "",
            required: false
        });
        const [isLoggedIn, setIsLoggedIn] = (0, react_13.useState)(false);
        const handleOnChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
                case "username":
                    setUsername({
                        value,
                        required: false
                    });
                    break;
                case "password":
                    setPassword({
                        value,
                        required: false
                    });
                    break;
                default:
                    console.log('default');
            }
        };
        const handleOnSubmit = (event) => {
            event.preventDefault();
            if (!username.value) {
                setUsername(Object.assign(Object.assign({}, username), { required: true }));
            }
            if (!password.value) {
                setPassword(Object.assign(Object.assign({}, password), { required: true }));
            }
            if (!username.value || !password.value) {
                return;
            }
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_8.default
                .post(`${serverURL}/login`, {
                username: username.value,
                password: password.value
            })
                .then((response) => {
                if (response.status === 200) {
                    sessionStorage.setItem("authorization", `Bearer ${response.data.token}`);
                    setIsLoggedIn(true);
                }
            })
                .catch(err => {
                alert("Username or password is incorrect");
                setUsername(Object.assign(Object.assign({}, username), { required: true }));
                setPassword(Object.assign(Object.assign({}, password), { required: true }));
            });
        };
        if (isLoggedIn) {
            return (0, jsx_runtime_22.jsx)(react_router_dom_11.Redirect, { to: '/home' });
        }
        return ((0, jsx_runtime_22.jsxs)(jsx_runtime_22.Fragment, { children: [(0, jsx_runtime_22.jsx)(LandingPageHeader_3.default, {}), (0, jsx_runtime_22.jsx)("main", Object.assign({ className: "login" }, { children: (0, jsx_runtime_22.jsxs)("div", Object.assign({ className: "login__card" }, { children: [(0, jsx_runtime_22.jsxs)("div", Object.assign({ className: "login__title-container" }, { children: [(0, jsx_runtime_22.jsx)("img", { src: album_white_36_svg_3.default, alt: "album" }), (0, jsx_runtime_22.jsx)("h2", Object.assign({ className: "login__title" }, { children: "Collectify" }))] })), (0, jsx_runtime_22.jsxs)("form", Object.assign({ onSubmit: handleOnSubmit, method: "POST", className: "login-form" }, { children: [(0, jsx_runtime_22.jsxs)("div", Object.assign({ className: "login-form__form-group" }, { children: [(0, jsx_runtime_22.jsx)("label", Object.assign({ htmlFor: "username", className: "login-form__label" }, { children: "Username" })), (0, jsx_runtime_22.jsx)("input", { type: "text", id: "username", name: "username", value: username.value, onChange: handleOnChange, placeholder: "Enter username here", className: `login-form__input ${username.required ? "login-form__input--invalid" : ""}` })] })), (0, jsx_runtime_22.jsxs)("div", Object.assign({ className: "login-form__form-group" }, { children: [(0, jsx_runtime_22.jsx)("label", Object.assign({ htmlFor: "password", className: "login-form__label" }, { children: "Password" })), (0, jsx_runtime_22.jsx)("input", { type: "password", id: "password", name: "password", value: password.value, onChange: handleOnChange, placeholder: "Enter password here", className: `login-form__input ${password.required ? "login-form__input--invalid" : ""}` })] })), (0, jsx_runtime_22.jsx)("div", Object.assign({ className: "login-form__button-container" }, { children: (0, jsx_runtime_22.jsx)("button", Object.assign({ type: "submit", className: "login-form__button" }, { children: "Log In" })) }))] })), (0, jsx_runtime_22.jsxs)("div", Object.assign({ className: "login__text" }, { children: [(0, jsx_runtime_22.jsx)("p", Object.assign({ className: "login__paragraph" }, { children: "Not a member?" })), (0, jsx_runtime_22.jsx)(react_router_dom_11.Link, Object.assign({ to: '/signup', className: "login__link" }, { children: "Sign up" }))] }))] })) })), (0, jsx_runtime_22.jsx)(PageFooter_5.default, {})] }));
    }
    exports.default = LoginPage;
});
define("pages/LoginPage/index", ["require", "exports", "pages/LoginPage/LoginPage"], function (require, exports, LoginPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    LoginPage_1 = __importDefault(LoginPage_1);
    exports.default = LoginPage_1.default;
});
define("pages/SignupPage/SignupPage", ["require", "exports", "react/jsx-runtime", "axios", "react", "react-router-dom", "../../assets/icons/album-white-36.svg", "components/LandingPageHeader/index", "components/PageFooter/index", "./SignupPage.scss"], function (require, exports, jsx_runtime_23, axios_9, react_14, react_router_dom_12, album_white_36_svg_4, LandingPageHeader_4, PageFooter_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_9 = __importDefault(axios_9);
    album_white_36_svg_4 = __importDefault(album_white_36_svg_4);
    LandingPageHeader_4 = __importDefault(LandingPageHeader_4);
    PageFooter_6 = __importDefault(PageFooter_6);
    function SignUpPage() {
        const [firstName, setFirstName] = (0, react_14.useState)({
            value: "",
            required: false
        });
        const [lastName, setLastName] = (0, react_14.useState)({
            value: "",
            required: false
        });
        const [username, setUsername] = (0, react_14.useState)({
            value: "",
            required: false
        });
        const [password, setPassword] = (0, react_14.useState)({
            value: "",
            required: false
        });
        const [confirmPassword, setConfirmPassword] = (0, react_14.useState)({
            value: "",
            required: false
        });
        const [isSubmitted, setIsSubmitted] = (0, react_14.useState)(false);
        const handleOnChange = (event) => {
            const { name, value } = event.target;
            switch (name) {
                case "firstName":
                    setFirstName({
                        value,
                        required: false
                    });
                    break;
                case "lastName":
                    setLastName({
                        value,
                        required: false
                    });
                    break;
                case "username":
                    setUsername({
                        value,
                        required: false
                    });
                    break;
                case "password":
                    setPassword({
                        value,
                        required: false
                    });
                    break;
                case "confirmPassword":
                    setConfirmPassword({
                        value,
                        required: false
                    });
                    break;
                default:
                    console.log('default');
            }
        };
        const handleOnSubmit = (event) => {
            event.preventDefault();
            if (!firstName.value) {
                setFirstName(Object.assign(Object.assign({}, firstName), { required: true }));
            }
            if (!lastName.value) {
                setLastName(Object.assign(Object.assign({}, lastName), { required: true }));
            }
            if (!username.value) {
                setUsername(Object.assign(Object.assign({}, username), { required: true }));
            }
            if (!password.value) {
                setPassword(Object.assign(Object.assign({}, password), { required: true }));
            }
            if (!confirmPassword.value) {
                setConfirmPassword(Object.assign(Object.assign({}, confirmPassword), { required: true }));
            }
            if (confirmPassword.value !== password.value) {
                alert("Passwords do not match");
                setConfirmPassword(Object.assign(Object.assign({}, confirmPassword), { required: true }));
            }
            if (!firstName.value || !lastName.value || !username.value || !password.value || !confirmPassword.value) {
                return;
            }
            const serverURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';
            axios_9.default
                .post(`${serverURL}/signup`, {
                firstName: firstName.value,
                lastName: lastName.value,
                username: username.value,
                password: password.value
            })
                .then(() => {
                alert("User successfully signed up");
                setIsSubmitted(true);
            })
                .catch(() => alert("Username already exists, please choose another username"));
        };
        if (isSubmitted) {
            return (0, jsx_runtime_23.jsx)(react_router_dom_12.Redirect, { to: '/' });
        }
        return ((0, jsx_runtime_23.jsxs)(jsx_runtime_23.Fragment, { children: [(0, jsx_runtime_23.jsx)(LandingPageHeader_4.default, {}), (0, jsx_runtime_23.jsx)("main", Object.assign({ className: "signup" }, { children: (0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup__card" }, { children: [(0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup__title-container" }, { children: [(0, jsx_runtime_23.jsx)("img", { src: album_white_36_svg_4.default, alt: "album" }), (0, jsx_runtime_23.jsx)("h2", Object.assign({ className: "signup__title" }, { children: "Collectify" }))] })), (0, jsx_runtime_23.jsxs)("form", Object.assign({ onSubmit: handleOnSubmit, method: "POST", className: "signup-form" }, { children: [(0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup-form__form-group" }, { children: [(0, jsx_runtime_23.jsx)("label", Object.assign({ htmlFor: "firstName", className: "signup-form__label" }, { children: "First Name" })), (0, jsx_runtime_23.jsx)("input", { type: "text", id: "firstName", name: "firstName", value: firstName.value, onChange: handleOnChange, placeholder: "Enter first name here", className: `signup-form__input ${firstName.required ? "signup-form__input--invalid" : ""}` })] })), (0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup-form__form-group" }, { children: [(0, jsx_runtime_23.jsx)("label", Object.assign({ htmlFor: "lastName", className: "signup-form__label" }, { children: "Last Name" })), (0, jsx_runtime_23.jsx)("input", { type: "text", id: "lastName", name: "lastName", value: lastName.value, onChange: handleOnChange, placeholder: "Enter last name here", className: `signup-form__input ${lastName.required ? "signup-form__input--invalid" : ""}` })] })), (0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup-form__form-group" }, { children: [(0, jsx_runtime_23.jsx)("label", Object.assign({ htmlFor: "username", className: "signup-form__label" }, { children: "Username" })), (0, jsx_runtime_23.jsx)("input", { type: "text", id: "username", name: "username", value: username.value, onChange: handleOnChange, placeholder: "Enter username here", className: `signup-form__input ${username.required ? "signup-form__input--invalid" : ""}` })] })), (0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup-form__form-group" }, { children: [(0, jsx_runtime_23.jsx)("label", Object.assign({ htmlFor: "password", className: "signup-form__label" }, { children: "Password" })), (0, jsx_runtime_23.jsx)("input", { type: "password", id: "password", name: "password", value: password.value, onChange: handleOnChange, placeholder: "Enter password here", className: `signup-form__input ${password.required ? "signup-form__input--invalid" : ""}` })] })), (0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup-form__form-group" }, { children: [(0, jsx_runtime_23.jsx)("label", Object.assign({ htmlFor: "confirmPassword", className: "signup-form__label" }, { children: "Confirm Password" })), (0, jsx_runtime_23.jsx)("input", { type: "password", id: "confirmPassword", name: "confirmPassword", value: confirmPassword.value, onChange: handleOnChange, placeholder: "Enter password here", className: `signup-form__input ${confirmPassword.required ? "signup-form__input--invalid" : ""}` })] })), (0, jsx_runtime_23.jsx)("div", Object.assign({ className: "signup-form__button-container" }, { children: (0, jsx_runtime_23.jsx)("button", Object.assign({ type: "submit", className: "signup-form__button" }, { children: "Sign Up!" })) }))] })), (0, jsx_runtime_23.jsxs)("div", Object.assign({ className: "signup__text" }, { children: [(0, jsx_runtime_23.jsx)("p", Object.assign({ className: "signup__paragraph" }, { children: "Already a member?" })), (0, jsx_runtime_23.jsx)(react_router_dom_12.Link, Object.assign({ to: '/login', className: "signup__link" }, { children: "Login" }))] }))] })) })), (0, jsx_runtime_23.jsx)(PageFooter_6.default, {})] }));
    }
    exports.default = SignUpPage;
});
define("pages/SignupPage/index", ["require", "exports", "pages/SignupPage/SignupPage"], function (require, exports, SignupPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SignupPage_1 = __importDefault(SignupPage_1);
    exports.default = SignupPage_1.default;
});
define("App", ["require", "exports", "react/jsx-runtime", "react-router-dom", "pages/AboutPage/index", "pages/HomePage/HomePage", "pages/LandingPage/index", "pages/LoginPage/index", "pages/SignupPage/index", "./App.scss"], function (require, exports, jsx_runtime_24, react_router_dom_13, AboutPage_2, HomePage_1, LandingPage_2, LoginPage_2, SignupPage_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    AboutPage_2 = __importDefault(AboutPage_2);
    HomePage_1 = __importDefault(HomePage_1);
    LandingPage_2 = __importDefault(LandingPage_2);
    LoginPage_2 = __importDefault(LoginPage_2);
    SignupPage_2 = __importDefault(SignupPage_2);
    function App() {
        return ((0, jsx_runtime_24.jsx)(react_router_dom_13.BrowserRouter, { children: (0, jsx_runtime_24.jsxs)(react_router_dom_13.Switch, { children: [(0, jsx_runtime_24.jsx)(react_router_dom_13.Route, { path: '/', exact: true, component: LandingPage_2.default }), (0, jsx_runtime_24.jsx)(react_router_dom_13.Route, { path: '/login', exact: true, component: LoginPage_2.default }), (0, jsx_runtime_24.jsx)(react_router_dom_13.Route, { path: '/signup', component: SignupPage_2.default }), (0, jsx_runtime_24.jsx)(react_router_dom_13.Route, { path: '/home', component: HomePage_1.default }), (0, jsx_runtime_24.jsx)(react_router_dom_13.Route, { path: '/about', component: AboutPage_2.default })] }) }));
    }
    exports.default = App;
});
define("index", ["require", "exports", "react/jsx-runtime", "react", "react-dom", "App"], function (require, exports, jsx_runtime_25, react_15, react_dom_1, App_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_15 = __importDefault(react_15);
    react_dom_1 = __importDefault(react_dom_1);
    App_1 = __importDefault(App_1);
    react_dom_1.default.render((0, jsx_runtime_25.jsx)(react_15.default.StrictMode, { children: (0, jsx_runtime_25.jsx)(App_1.default, {}) }), document.getElementById('root'));
});
define("components/SearchResultForm/index", ["require", "exports", "components/SearchResultForm/SearchResultForm"], function (require, exports, SearchResultForm_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SearchResultForm_2 = __importDefault(SearchResultForm_2);
    exports.default = SearchResultForm_2.default;
});
define("components/WishList/index", ["require", "exports", "components/WishList/WishList"], function (require, exports, WishList_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WishList_2 = __importDefault(WishList_2);
    exports.default = WishList_2.default;
});
define("pages/HomePage/index", ["require", "exports", "pages/HomePage/HomePage"], function (require, exports, HomePage_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HomePage_2 = __importDefault(HomePage_2);
    exports.default = HomePage_2.default;
});
