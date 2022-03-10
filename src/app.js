    
// Pisahkan File React JS ke dalam folder Src agar bisa di compile dengan Babel JS
const root = document.querySelector('#root');

    console.log('Compile Otomatis');

    // React JS returnnya = Objek Literal
    const h1 = React.createElement('h1', {
        children: 'My First React App!',
        className: 'mt-10 font-bold text-center text-3xl'
    });

    const h2 = React.createElement('p', {
        children: 'Collaborate with Tailwind CSS',
        className: 'mb-5 mt-2 text-center italic'
    });

    // Me-render 2 Element dengan nested Element
    const p1 = React.createElement('p', {
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nemo voluptatibus quia, nam earum mollitia exercitationem possimus consectetur cum cupiditate quae. Debitis nulla vitae fuga porro ipsam nemo, vero delectus!',
        className: 'text-justify mb-5'
    });

    const p2 = React.createElement('p', {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam rem minima provident, quae asperiores alias quam eum porro neque voluptatum deleniti ipsum saepe? Possimus incidunt accusantium quaerat et at explicabo nobis nostrum fugit nihil est. Ad deleniti, possimus, quibusdam doloribus autem laudantium eos soluta veniam commodi dolor tenetur dolorem consequuntur!',
        className: 'text-justify'
    });

    // Menggunakan Jsx dengan Compiler BabelJS (standalone)
    const babelJS = (
        <p className="text-justify mb-10 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, corrupti? Necessitatibus dolores odit facere quod. Omnis pariatur optio asperiores odit nisi dolorem nesciunt consequatur perferendis doloremque provident earum molestiae quidem suscipit dolore officiis, saepe repudiandae, ratione a eveniet tempore similique, id quaerat laborum quisquam. Sed voluptate quia labore officiis ut.</p>
    );

    // Embed Variabel di dalam Jsx
    const name = 'Richard';

    // Embed value di Props tidak memakai tanda kutip apapun
    const className = 'text-2xl mb-4 font-semibold';
    const greet = <p className={className}>Hello {name}!</p> 

    // Embed Img ke dalam Jsx (Wajib memakai Sub closing Tag)
    const image = <img src="https://source.unsplash.com/1080x720/?Technology" alt="Image Technology" className='mb-10 rounded-3xl shadow-lg'/>

    // Belajar React Component 
    // Bikin Argumennya dengan props terus manggilnya sama kayak object
    function Halo(props) {
        return <p className={props.class}>Sedang Belajar <b>{props.name}</b></p>
    }

    function time() {
        return <p className="my-3 text-center font-semibold">{new Date().toLocaleTimeString()}</p>
    }

    const item1 = <div className="box mt-5 mx-auto rounded-3xl"></div>
    
    function clickMe(msg) {
        alert(msg);
    }

    //Belajar React Event Handling
    const btn1 = (
        <button onClick={clickMe.bind(this, 'ZONK!')}
                className="w-auto h-auto block py-2 px-5 bg-sky-500 mx-auto my-5 rounded-3xl text-white font-bold shadow-lg hover:bg-sky-600 hover:-translate-y-2 focus:ring focus:ring-sky-300 transition duration-500">Tweet</button>
    );
    
    // Belajar React State (App Counter)
    function Counter() {
        const [count, setCount] = React.useState(0);

        return (
            <div className="flex justify-center my-5">
                <button onClick={function () {
                    setCount(count - 1)
                }} className="w-auto h-auto py-auto px-5 bg-teal-500 rounded-3xl shadow-lg hover:bg-teal-300 transition duration-300">Kurang</button>

                <h3 className="mx-5 text-2xl font-bold">{count}</h3>

                <button onClick={function () {
                    setCount(count + 1)
                }} className="w-auto h-auto py-auto px-5 bg-teal-500 rounded-3xl shadow-lg hover:bg-teal-300 transition duration-300">Tambah</button>
            </div>
        );
    }
    
    //TODO React Component Lifecycle memakai React.useEffect()
    //TODO untuk memantau perubahan dari state apapun di dalam sebuah function
    //TODO Bisa diatur dengan menggunakan parameter ke-2 [Array] bisa juga dibuat Empty Array
    //TODO Video ada di part 21 - 23  
    // React.useEffect(function () {
    //     console.log('React Use Effect');
    // });

    function tampilkan() {
    // Dibungkus dengan 1 Parent
    const element = React.createElement('div', {
        className: 'container p-5 max-w-full md:max-w-xl md:mx-auto'
    },
        // Nested Element React JS
        h1,
        h2,
        image,
        p1,
        p2,
        babelJS,
        greet,

        React.createElement('li', null, 'Apple'),
        React.createElement('li', null, 'Orange'),
        React.createElement('li', null, 'Grape'),

        <Halo name='React Component' class='mt-10 text-center text-2xl text-slate-800'/>,
        time(),
        item1,
        btn1,
        <Counter />,

        // Buat Scroll jauh ke bawah
        React.createElement('div', {className: "mb-72"})
        
    )

    ReactDOM.render(element, root)
    };
        
    setInterval(function () {
        tampilkan()
    }, 1000);