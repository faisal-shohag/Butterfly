import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

const FAQ = () => {
    return (
        <div className='ml-80 mt-20'>
            <Accordion type="single" collapsible >
                <AccordionItem value="item-1">
                    <div className=" border-t border-gray-200 dark:border-gray-700 w-40"> </div>
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                    <div className=" border-t border-gray-200 dark:border-gray-700 "> </div>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that match the other components' aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FAQ;
