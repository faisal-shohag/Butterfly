import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

const FAQ = () => {
    return (
        <div className='mt-20 mb-20 px-4'>
            <div className='flex flex-col items-center md:items-start md:ml-auto md:max-w-[600px] mx-auto text-center md:text-left'>
                <h1 className='font-medium text-2xl md:text-4xl pb-2'>
                    HAVE A QUESTION? START HERE
                </h1>
                <h3 className='font-light text-lg md:text-xl'>
                    Answers to our most frequently asked questions
                </h3>
            </div>

            <div className='grid justify-items-center px-4 md:justify-items-center'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                        <AccordionTrigger className='py-3 text-lg md:text-xl font-normal'>
                            How does the book exchange process work?
                        </AccordionTrigger>
                        <AccordionContent className='text-base md:text-lg font-light'>
                            How Simply browse the available books,  select the one you’d like to exchange, and send a request <br /> to the owner. Once the owner approves the request, you can arrange the exchange
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                        <AccordionTrigger className='py-3 text-lg md:text-xl font-normal'>
                            Is it styled?
                        </AccordionTrigger>
                        <AccordionContent className='text-base md:text-lg font-light'>
                            Yes. It comes with default styles that match the other components' aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-3">
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                        <AccordionTrigger className='py-3 text-lg md:text-xl font-normal'>
                            Is it animated?
                        </AccordionTrigger>
                        <AccordionContent className='text-base md:text-lg font-light'>
                            Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                    </AccordionItem>
                </Accordion>
            </div>




        </div>
    );
};

export default FAQ;
