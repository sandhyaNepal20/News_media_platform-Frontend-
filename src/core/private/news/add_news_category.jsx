import { useForm } from "react-hook-form";
import { useNewsCategory } from "../../public/query";

const AddCategory = () => {
    const { mutate, isLoading, isError, error } = useNewsCategory();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submit = (data) => {
        console.log("Raw form data:", data);

        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("description", data?.description);

        console.log("Form Data before sending:", Object.fromEntries(formData.entries()));

        mutate(data, {
            onSuccess: () => {
                alert("News category added successfully!");
                reset();
            },
            onError: (err) => {
                console.error("Error adding news category:", err);
                alert("Failed to add news category.");
            },
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-md p-6 bg-[#101F3F] text-white shadow-lg rounded-lg">
                {/* ✅ Add News Category Form */}
                <form className="p-6" onSubmit={handleSubmit(submit)}>
                    <h1 className="text-2xl font-bold text-center mb-5">
                        Add News Category
                    </h1>

                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3  bg-white  text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter category name"
                            {...register("name", { required: "Category Name is required" })}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            rows="3"
                            className="w-full p-3 bg-white text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter category description"
                            {...register("description", { required: "Description is required" })}
                        />
                        {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                            disabled={isLoading}
                        >
                            {isLoading ? "Adding..." : "Add Category"}
                        </button>
                    </div>

                    {/* Error Message */}
                    {isError && <p className="text-red-400 text-xs mt-3 text-center">Error: {error?.message || "Something went wrong"}</p>}
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
