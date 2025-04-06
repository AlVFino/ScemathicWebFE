

const AddFormCourseAdmin = () => {

  return (
    <div className="p-6 border-4 border-gray-200 max-w-3xl mx-auto mt-16 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm">Preview</span>
            </div>
            <input type="file" name="thumbnail" accept="image/*" className="mt-3 text-sm" required />
        </div>
        <div className="md:w-2/3">
            <h2 className="text-xl font-bold mb-4">Tambah Course</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="title" placeholder="Judul" className="border p-2 rounded" required />
                <input type="text" name="description" placeholder="Deskripsi" className="border p-2 rounded" required />
                <input type="text" name="author" placeholder="penulis" className="border p-2 rounded" required />
                <input type="text" name="Price" placeholder="Harga" className="border p-2 rounded" required />
                <button type="submit" className="col-span-1 md:col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Tambah Event</button>
            </form>
        </div>
    </div>
  )
}

export default AddFormCourseAdmin