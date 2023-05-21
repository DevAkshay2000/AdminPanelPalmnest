import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Queries from './components/Queries';
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import Dashboard from './components/Dashboard';
import TActivity from './components/TActivity';
import TBlog from './components/TBlog';
import TGallery from './components/TGallery'
import THome from './components/THome'
import TTestimonials from './components/TTestimonials';
import EBlog from './components/EBlog';
import Login from './components/Auth/Login'

function App() {

    return (
        <>
            <div className="container-fluid">
                {localStorage.getItem('token') ? (
                    <>
                        <div className="row">
                            <div className="col-lg-3">
                                <Sidebar />
                            </div>
                            <div className="routing_div col-lg-9">
                                <Routes>
                                    <Route path='/' index element={<Dashboard />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/activity" element={<Activities />} />
                                    <Route path="/gallery" element={<Gallery />} />
                                    <Route path="/query" element={<Queries />} />
                                    <Route path="/blogs" element={<Blogs />} />
                                    <Route path="/testimonials" element={<Testimonials />} />

                                    <Route path="/activityTable" element={<TActivity />} />
                                    <Route path="/blogsTable" element={< TBlog />} />
                                    <Route path="/galleryTable" element={< TGallery />} />
                                    <Route path="/homeTable" element={< THome />} />
                                    <Route path="/testimonialsTable" element={< TTestimonials />} />
                                    <Route path="/blogsEdit" element={< EBlog />} />
                                </Routes>
                            </div>
                        </div>
                    </>
                ) : (<Login />)}


            </div>

        </>

    );
}

export default App;
