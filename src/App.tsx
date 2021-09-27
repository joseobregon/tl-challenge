import SideCart from './components/SideCart'
import Layout from './components/Layout'
import Backdrop from './components/Backdrop'

function App() {
    const isSideCartOpen = true
    return (
        <Layout>
            <>
                {/* Page content */}
                {isSideCartOpen && (
                    <>
                        <Backdrop />
                        <SideCart />
                    </>
                )}
            </>
        </Layout>
    )
}

export default App
