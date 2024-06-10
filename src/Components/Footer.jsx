

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 City Greens </p>
        </div>
        <div>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  )

}