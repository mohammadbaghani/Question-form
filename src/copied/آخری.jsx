import React, { useRef, useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import './index.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';
import For from './Form';
import Todo from './Todo/Todo';
import './TodoList.css';
import Chart from './Chart';
import Numbers from './Numbers';


import { FreeMode, Navigation, Thumbs,Pagination,A11y } from 'swiper/modules';



import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';








import StepButton from '@mui/material/StepButton';




import { SwiperNavButtons } from './SwiperNavButton';







export default function App() {

  const steps = [
    {
      label: 'ثبت نام',
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'مهارت های حسابداری',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'مهارت های خزانه',
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
    {
      label: 'مهارت های عمومی',
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ];


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleNexttow = () => {
    setActiveStep(2);

  };


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingone, setRatingone] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [hoverone, setHoverone] = useState(0);
  const [A, setA] = useState([]);

  const [B, setB] = useState([]);
  const [C, setC] = useState([]);

  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')


  function todoTitleHandler(event) {
    let newTodoObject = {
      id: A.length + 1,
      title: event.target.value,

    }

    setA([]);
    setA([...A, newTodoObject]);
    const savedItem = localStorage.getItem("name");
    const parsedItem = JSON.parse(savedItem);
    setB(parsedItem);
  }
  function r(event) {

    let empty = {
      id: C.length + 1,

      t: event.target.value,

    }
    let newTodoObject = {
      id: C.length + 1,

      t: event.target.value,

    }
    setC(['']);
    setC([...C, newTodoObject]);


  }
  const swiperRef = useRef(null);
  const buttonRef = useRef(null);
  
  const cc = () => {
    onClick={toSlide}
     ref={buttonRef}
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(A));
  }, [A]);
  return (
    <>



      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">



          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption"> {step.index}</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
          
            </Step>
          ))}






        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>فرم کامل شد!&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
             از اول
            </Button>
          </Paper>
        )}
      </Box>




      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
    
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs,A11y,Pagination]}
        className="mySwiper2"


   

        slidesPerView="auto"
      >


        <SwiperSlide>



          <For />



        </SwiperSlide>
        <SwiperSlide>
          <div className="App">

            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Continue
            </Button>

            <h1 className='myh'
             >             اطلاعات پایه

              شما در چه حد است؟


            </h1>
       

            <div>
              {
                [1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setRating(num)}
                    onMouseOver={() => setHover(num)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span
                      className={//5<=5
                        `star ${num <= (rating || hover)
                          ? 'on' : 'off'
                        }`
                      }
                    >&#9733;</span>
                  </button>
                ))
              }
            </div>
          </div >
        </SwiperSlide>
        <SwiperSlide>
          <div className="App">
            <Button
              variant="contained"
              onClick={handleNexttow}
              sx={{ mt: 1, mr: 1 }}
            >
              Continue
            </Button>
            <h1 className='myh'>            مهارت شما در
              ثبت و صدور اسناد



              چه قدر است؟</h1>
            <div>
              {
                [1, 2, 3, 4, 5].map((nume) => (
                  <button
                    key={nume}
                    onClick={() => setRatingone(nume)}
                    onMouseOver={() => setHover(nume)}
                    onMouseLeave={() => setHover(ratingone)}
                  >
                    <span
                      className={
                        `star ${nume <= (ratingone || hoverone)
                          ? 'on' : 'off'
                        }`
                      }
                    >&#9733;</span>
                  </button>
                ))
              }
            </div>
          </div >
        </SwiperSlide>

        <SwiperSlide>
          <div className='containerinput'>


            <p className="all-todos choo">
              اینجا
              انتخاب مهارت !


            </p>

            <form className="all-todos">

              <div className="select">
                <select name="todos" className="filter-todo" onChange={todoTitleHandler}>
                  <option value="Listenning" className="option-todo">Listenning</option>
                  <option className="option-todo" value="Speaking">Speaking</option>
                  <option value="Reading" className="option-todo">Reading</option>
                  <option className="option-todo" value="Writing">Writing</option>





                </select>
              </div>
            </form>
            <p className="left-all choo">
              اینجا

              نمره دهید



            </p>

            <form className=" left-all">


              <div className="select">
                <select name="todos" className="filter-todo left-f" onChange={r}>

                  <option value="5" className="option-todo">پنج</option>
                  <option value="10" className="option-todo">ده</option>
                  <option className="option-todo" value="15">پانزده</option>

                  <option className="option-todo" value="20">بیست</option>

                </select>
              </div>
            </form>



            <div className="todo-container">


              <ul className="todo-list">


                <Numbers {...C[0]} />
                <Numbers {...C[1]} />
                <Numbers {...C[2]} />
                <Numbers {...C[3]} />
                <Numbers {...C[4]} />
              </ul>

              <ul className="todo-list">

                <Todo {...A[0]} />
                <Todo {...A[1]} />
                <Todo {...A[2]} />
                <Todo {...A[3]} />
                <Todo {...A[4]} />
              </ul>





              <div className="vvvv">


                <Chart {...C[0]} {...B[0]} />


                <Chart {...C[1]} {...B[1]} />





                <Chart {...C[2]}{...B[2]} />
                <Chart {...C[3]} {...B[3]} />
                <Chart {...C[4]} {...B[4]} />




              </div>

            </div>


          </div>
        </SwiperSlide>
     
        <SwiperNavButtons a={handleNext} b={handleBack} />

      </Swiper>

    </>
  );
}
