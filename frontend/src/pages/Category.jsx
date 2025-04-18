import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import all_products from "../assets/all_products.js"
import Item from "../components/Item.jsx"
function Category({ category, banner }) {
  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        <div>
          <img src={banner} alt={category} className="block my-7 mx-auto" />
        </div>
        <div className="flexBetween my-8 mx-2">
          <h5 className="font-bold">showing 1-12<span>out of 36 products</span></h5>
          <div className="flexBetween mx-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-800/15">sort by<MdOutlineKeyboardArrowDown /></div>
        </div>
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {all_products.map((item) => {
          if (item.category == category) {
            return (
              <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            )
          }
        })}
        </div>
        <div className="mt-16 text-center">
          <button className="btn_dark_rounded">Load more</button>
        </div>
      </div>
    </section>
  )
}

export default Category
