
function NewLetter() {
  return (
    <section className="max_padd_container py-12 py-12 xl:py-28 bg-white">
        <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
            <h3 className="h3">Get Exclusive Offerts  on Your Email</h3>
            <h4 className="h4 uppercase bold-18">Suscribese to our newlatter and stay updated</h4>
            <div className="flexBetween rounded-full ring-1 ring-slate-900/15 hover:ring-slate-900/25 bg-primary w-full max-w-[588px]">
                <input type="email" name="" id="" placeholder="your Email address" className="w-full bg-transparent ml-7 border-none outline-none regular-16" />
                <button className="btn_dark_rounded ">suscribe</button>
            </div>
        </div>
    </section>
  )
}

export default NewLetter
