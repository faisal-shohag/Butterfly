import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

const FAQ = () => {
    return (
        <div className='mt-20 mb-24 px-4'>
            <div className='flex flex-col items-center md:items-start md:ml-auto md:max-w-[600px] mx-auto text-center mb-5 md:text-left'>
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
                            How Simply browse the available books, select the one you’d like to exchange,<br />  and send a request to the owner. Once the owner approves the request,<br />  you can arrange the exchange
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                        <AccordionTrigger className='py-3 text-lg md:text-xl font-normal'>
                            Is there a fee to exchange books?
                        </AccordionTrigger>
                        <AccordionContent className='text-base md:text-lg font-light'>
                            No, the platform allows users to exchange books without any fees. However,<br />  any shipping costs are the responsibility of the users involved.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                        <AccordionTrigger className='py-3 text-lg md:text-xl font-normal'>
                        What happens if I don't like the book I received?
                        </AccordionTrigger>
                        <AccordionContent className='text-base md:text-lg font-light'>
                        If the book does not meet your expectations or the condition agreed upon,<br /> you can report the issue, and we will help mediate a solution.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-3">
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                        <AccordionTrigger className='py-3 text-lg md:text-xl font-normal'>
                            Can I exchange multiple books at once?
                        </AccordionTrigger>
                        <AccordionContent className='text-base md:text-lg font-light'>
                            Yes, you can exchange as many books as you want, as long as both parties <br />  agree to the terms of the exchange
                        </AccordionContent>
                        <div className="border-t border-gray-200 dark:border-gray-700 w-full md:w-[600px] mt-3"></div>
                    </AccordionItem>
                </Accordion>
            </div>




        </div>
    );
};

export default FAQ;
