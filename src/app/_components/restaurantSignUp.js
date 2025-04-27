const RestaurantSignUp = () => {
    return (
        <div className="restaurant-signup">
            <h2>Restaurant Sign Up</h2>
            <form>
                <div>
                    <label htmlFor="name">Restaurant Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default RestaurantSignUp;