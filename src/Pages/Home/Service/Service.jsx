import Container from '@/src/Shared/Container';
import serviceAnim from "../../../assets/services/Animation - service.json"
import Lottie from 'lottie-react';

const Service = () => {
    return (
        <div className='mb-12'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div>
                        <Lottie animationData={serviceAnim} loop={true} />
                    </div>
                    <div>
                        <h1 className='text-5xl font-bold exo-font mt-12'>Do you want a fast service? Just call us.</h1>
                        <p className='my-6'>Need quick and reliable service? Just give us a call, and we’ll handle the rest! Whether it’s food, groceries, or packages, our fast and efficient delivery ensures your items arrive on time. Experience hassle-free service with just one call!</p>
                        <a href="tel:+1234567890" className="text-white bg-[#f39c12] hover:bg-[#925e0b] px-8 py-3 rounded-lg cursor-pointer transition-all" >
                            Call Us
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Service;