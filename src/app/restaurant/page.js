import RestaurantLogin from "../_components/restaurantLogin";
// import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
    return (
        <>
            <h1>Restaurant login/signup Page</h1>
            <RestaurantLogin />
            {/* <RestaurantSignUp /> */}
            <button>Already have Account? SignUp</button>
        </>
    );
}

export default Restaurant;