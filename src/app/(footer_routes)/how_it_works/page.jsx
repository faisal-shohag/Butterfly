
const HowItWorks = () => {
    return (
        <div className="px-3 space-y-2">
            <h2 className="text-2xl font-bold opacity-75">How ButterFly Work</h2>
            <p> Welcome to Butterfly Books, where book lovers can exchange and buy books from one another. Whether you are here to give your books a new home or find your next great read, we make the process simple and enjoyable. Here's how it works: </p>

            <h2 className="text-xl font-bold opacity-75">1. Create an Account</h2>
            <p>To start exchanging or buying books, you need to sign up for an account. It's free and quick! Once you have registered, you will have access to all the features of the platform, including posting books for exchange or sale.</p>
             
            <h2 className="text-lg font-bold opacity-75">Steps:</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>Click on the Sign Up button.</li>
                <li>Fill out your details and create a password.</li>
                <li>You’re all set to explore the platform.</li>
            </ul>
             
            <h2 className="text-xl font-bold opacity-75">2. Post Your Books for Exchange</h2>
            <p>Have books you’d like to give a new home? Post them on our platform so others can find and request them.</p>
            <h2 className="text-lg font-bold opacity-75">Steps:</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>Navigate to your <span className="font-medium">Exchange page</span> and click <span className="font-medium">Create Exchange</span>.</li>
                <li>Fill out the book details, including title, author, condition, and whether it's for <span className="font-medium">Exchange</span>.</li>
                <li>Add a photo of the book to make it more appealing to potential buyers or exchangers.</li>
                <li>Hit <span className="font-medium">Add Book</span>, and your listing will go live!</li>
            </ul>

            <h2 className="text-xl font-bold opacity-75">3. Browse and Discover Books</h2>
            <p>Looking for a specific book? Or just browsing for something new? Our platform allows you to easily search for and discover books available for exchange or purchase.</p>

        </div>
    );
};

export default HowItWorks;