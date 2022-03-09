    
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
        return <p>{new Date().toLocaleTimeString()}</p>
    }

    const item1 = <div className="box"></div>

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

        // Buat Scroll jauh ke bawah
        React.createElement('div', {className: "mb-72"})
        
    )

    ReactDOM.render(element, root)
    };
        
    setInterval(function () {
        tampilkan()
    }, 1000);