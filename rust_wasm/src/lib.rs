use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn double(x: u32) -> u32 {
    x * 2
}

#[wasm_bindgen]
pub fn reverse_rust(s: &str) -> String {
    s.chars().rev().collect()
}

#[wasm_bindgen]
pub fn test(s: &str) -> u32 {
    let num: i32 = s.parse().unwrap();
    num as u32
}