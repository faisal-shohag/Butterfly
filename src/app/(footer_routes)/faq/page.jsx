import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

const FAQ = () => {
    return (
        <div className=' mt-20 mb-20'>
            <div className='ml-[460px]'>
                <h1 className='font-medium text-4xl pb-2'>HAVE A QUESTION? START HERE</h1>
                <h3 className='font-light text-xl'>Answers to out most frequently asked questions</h3>
            </div>
            <div className='justify-items-center'>
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <div className=" border-t border-gray-200 dark:border-gray-700 w-[600px] mt-3"> </div>
                        <AccordionTrigger className='py-3'>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>

                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <div className=" border-t border-gray-200 dark:border-gray-700 w-[600px] mt-3"> </div>
                        <AccordionTrigger className='py-3'>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>

                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible >
                    <AccordionItem value="item-1">
                        <div className=" border-t border-gray-200 dark:border-gray-700 w-[600px] mt-3"> </div>
                        <AccordionTrigger className='py-3'>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                        <div className=" border-t border-gray-200 dark:border-gray-700 w-[600px]"> </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
