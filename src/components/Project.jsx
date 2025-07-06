import React from 'react'
import bg from '../assets/bg.jpg'
const Project = () => {
  return (
    <div className='py-20 px-10 grid grid-rows-3 gap-10 place-content-center'>
        <div className='border-2 border-white md:grid grid-cols-[1fr_1.5fr] items-center'>
            <div className='pt-8 px-12 md:py-4'>
                <img src={bg} className='object-contain rounded-full py-4 px-4'></img>

            </div>
            <div className='px-8 py-10'>
              <h1 className='md:py-4'>diabetic retinopathy detection</h1>
              <p className='md:py-10'> Developed a deep learning model for early detection and classification of Diabetic Retinopathy using ResNet50 and
                InceptionV3.Achieved 15% improvement in validation accuracy through transfer learning, data augmentation, and hyperparameter
                tuning with TensorFlow and Keras.Integrated a TensorFlow-powered ResNet50 model into a Flask-based web app using HTML, CSS, TailwindCSS and
                Reactjs enabling real-time diabetic retinopathy classification with 93% accuracy.
              </p>

            </div>
            
        </div>
        <div className='border-2 border-white md:grid grid-cols-[1fr_1.5fr] items-center'>
           <div className='pt-8 px-12 md:py-4'>
                <img src={bg} className='object-contain rounded-full py-4 px-4'></img>

            </div>
            <div className='px-8 py-10'>
              <h1 className='md:py-4'>camouflaged object detection</h1>
              <p className='md:py-10'>Built a segmentation model for Camouflaged Object Detection (COD) using the SegFormer architecture with
               MiT-B2 backbone, achieving an IoU of 77.5% and Dice score of 81.8% on the test dataset.Evaluated the model using metrics like IoU, Dice, Precision, Recall, MAE, S-measure, E-measure, and visualized
               segmentation outputs for performance insights.Integrated the model into a Flask-based web app using HTML, CSS, TailwindCSS and Reactjs enabling real-time
               camouflaged object detection.
              </p>

            </div>
            
        </div>
        <div className='border-2 border-white md:grid grid-cols-[1fr_1.5fr] items-center'>
            <div className='pt-8 px-12 md:py-4'>
                <img src={bg} className='object-contain rounded-full py-4 px-4'></img>

            </div>
            <div className='px-8 py-10'>
              <h1 className='md:py-4'>library management system</h1>
              <p className='md:py-10'>
                Developed a Java-based Library Management System with a user-friendly Swing GUI, enabling efficient management
                of book and student details.Implemented event-driven programming for interactive features such as adding, editing, searching, and deleting
                records.Designed a structured GridLayout interface and integrated a ComboBox for dynamic search criteria selection.Utilized JTable and DefaultTableModel for data visualization and management, with persistent storage achieved
                through file handling using BufferedReader and FileWriter.
              </p>

            </div>
            
        </div>
    </div>
  )
}

export default Project