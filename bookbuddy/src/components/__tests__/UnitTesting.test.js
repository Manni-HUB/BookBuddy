import {render, screen, cleanup} from '@testing-library/react';
import Navbar from '../../components/Navbar1';
// import Doctest from '../DoctorDashboard/DoctorTest';
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
})

test('should render Navbar', () => { 
     render(< Navbar />);
     var SB = screen.getByTestId("test1");
     expect(SB).toBeInTheDocument();
 })

 test('should render Navbar', () => { 
    render(< Navbar />);
    var SB = screen.getByTestId("test1");
    expect(SB).toBeInTheDocument();
})