import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <a className="logo">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NiIgaGVpZ2h0PSI0OCI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMjM5IDE0LjIwN2E1LjkyIDUuOTIgMCAxIDAgMC0xMS44MzggNS45MiA1LjkyIDAgMCAwIDAgMTEuODM4em00Mi4yMDYgOS42NjlhNS45MjUgNS45MjUgMCAwIDAtNS45MTktNS45MiA1LjkyNiA1LjkyNiAwIDAgMC01LjkyIDUuOTIgNS45MjYgNS45MjYgMCAwIDAgNS45MiA1LjkxOSA1LjkyNiA1LjkyNiAwIDAgMCA1LjkyLTUuOTJ6TTY1LjM5MyAwdjM3LjM5Mkg1Ny41di0xLjA4M2ExMy43IDEzLjcgMCAwIDEtNS45NzQgMS4zNzhjLTcuNjE2IDAtMTMuODEyLTYuMTk2LTEzLjgxMi0xMy44MTEgMC03LjYxNyA2LjE5Ni0xMy44MTMgMTMuODEyLTEzLjgxM2ExMy43IDEzLjcgMCAwIDEgNS45NzQgMS4zNzlWMGg3Ljg5M3pNMzcuNzE0IDB2MzcuMzkyaC03Ljg5M1YxNS4xODZMMTUuMjQgNDhINi42MDNsNC4zNTctOS44MDVMMCAxNC4yMDdoOC42NzhsNi41NjEgMTQuMzYgNi4zODEtMTQuMzZoOC4yMDFWMGg3Ljg5M3oiLz48L3N2Zz4=" alt="yld logo" class="" />
            </a>
        </Link>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
