import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

async function getCategories() {

    const categorySnapshot = await getDocs(collection(db, "categorias"));
    const categorias = [];

    categorySnapshot.forEach((doc) => {
        categorias.push({ id: doc.id, ...doc.data() });
    });

    return categorias;
}

async function getProducts() {

    const productSnapshot = await getDocs(collection(db, "productos"));
    const productos = [];
    productSnapshot.forEach((doc) => {
        productos.push({ id: doc.id, ...doc.data() });
    });

    return productos;
}

async function getProduct(id) {

    const productRef = doc(db, "productos", id);
    const docSnap = await getDoc(productRef);

    if (!docSnap.exists()) {
        console.log("No existe el producto");
        return null;
    }

    return { id: docSnap.id, ...docSnap.data() };
};

async function getProductsByCategory(category_id) {

    const categoryRef = doc(db, "categorias", category_id);

    const q = query(collection(db, "productos"), where("category", "==", categoryRef));

    const querySnapshot = await getDocs(q);

    const productos = [];

    querySnapshot.forEach((doc) => {
        productos.push({ id: doc.id, ...doc.data() });
    });

    return productos;
}

export { getProducts, getCategories, getProduct, getProductsByCategory}