import supabase from "./supabase"

export async function getCabins() {
  const {data, error} = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name")

  if (error) {
    console.error(error)
    throw new Error("Cabins could not be loaded")
  }
  return data
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(process.env.NEXT_PUBLIC_SUPABASE_URL)
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "")
  const imagePath = hasImagePath
    ? newCabin.image
    : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`

  let query = supabase.from("cabins")

  if (!id) {
    query = query.insert([{...newCabin, image: imagePath}])
  }

  if (id) {
    query = query.update({...newCabin, image: imagePath}).eq("id", id)
  }

  const {data, error} = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error("Cabins could not be created")
  }

  if (hasImagePath) return data

  const {error: storageError} = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image)

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id)
    console.error(error)
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    )
  }

  return data
}

export async function deleteCabin(id) {
  const {data, error} = await supabase.from("cabins").delete().eq("id", id)

  if (error) {
    throw new Error("Cabin could not be deleted")
  }

  return data
}
