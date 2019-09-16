import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>YLD Coding Challenge</title>
                    <meta name="description" content="The Internal YLD coding challenges for fun!" />
                    <link href="/static/css/skel.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,600,600i" rel="stylesheet" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />

            </div>
        )
    }
}

export default Layout
