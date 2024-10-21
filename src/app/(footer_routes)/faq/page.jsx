import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

const FAQ = () => {
    return (
        <div className='ml-80 mt-20'>
            <div>
                <h1>HAVE A QUESTION? START HERE</h1>
                <h3>Answers to out most frequently asked questions</h3>
            </div>
            <Accordion type="single" collapsible >
                <AccordionItem value="item-1">
                    <div className=" border-t border-gray-200 dark:border-gray-700 w-[600px]"> </div>
                    <AccordionTrigger className='py-3'>Is it accessible?</AccordionTrigger>

                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                    <div className=" border-t border-gray-200 dark:border-gray-700 w-[600px]"> </div>
                </AccordionItem>
                
            </Accordion>
        </div>
    );
};

export default FAQ;
