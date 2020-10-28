import { Shoe } from './shoe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  shoes: Array<Shoe> = [];

  constructor() {
    this.shoes = [
      {
        id: null,
        name: 'Response SR 5.0',
        description: 'Response SR 5.0',
        featuredImage: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3c9ab988fa4149919a2fab9700cb2e85_9366/Response_Super_Shoes_Grey_FX4831_06_standard.jpg',
        price: 75,
        photos: [
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/a62977180b13482aa331ab9700cb2818_9366/Response_Super_Shoes_Grey_FX4831_01_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a1c4b8379f294caea54dab9700cb459e_9366/Response_Super_Shoes_Grey_FX4831_04_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/0249454fa86142b0b68bab9700cb4c89_9366/Response_Super_Shoes_Grey_FX4831_05_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3c9ab988fa4149919a2fab9700cb2e85_9366/Response_Super_Shoes_Grey_FX4831_06_standard.jpg'
        ],
        backgroundColor: '#D6C3EA'
      },
      {
        id: null,
        name: 'Predator.1',
        description: 'Predator.1',
        featuredImage: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/388c8c8f045e49bd8c32ac15008a7edb_9366/Predator.1_Human_Race_Shoes_White_FY3502_06_standard.jpg',
        price: 150,
        photos: [
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/bb57c72401994f4abc80ac15008a78ec_9366/Predator.1_Human_Race_Shoes_White_FY3502_01_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/3c0eddbd2add408bb621ac15008a932a_9366/Predator.1_Human_Race_Shoes_White_FY3502_04_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/90ecd9394fea4ba59d03ac15008a9812_9366/Predator.1_Human_Race_Shoes_White_FY3502_05_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/388c8c8f045e49bd8c32ac15008a7edb_9366/Predator.1_Human_Race_Shoes_White_FY3502_06_standard.jpg',
        ],
        backgroundColor: '#FDECB0'
      },
      {
        id: null,
        name: 'Samba RM',
        description: 'Samba RM',
        featuredImage: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/65cdeb4ff7f9456a9c73aa0a01031632_9366/Samba_RM_Shoes_Beige_BD7673_06_standard.jpg',
        price: 120,
        photos: [
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8e00c74e9e8149aca5a2aa0a01030842_9366/Samba_RM_Shoes_Beige_BD7673_01_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/11b52215c19d4839aa3baa0a0103406a_9366/Samba_RM_Shoes_Beige_BD7673_04_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/3402b0d78d774f52805caa0a01034cec_9366/Samba_RM_Shoes_Beige_BD7673_05_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/65cdeb4ff7f9456a9c73aa0a01031632_9366/Samba_RM_Shoes_Beige_BD7673_06_standard.jpg'],
        backgroundColor: '#EDEDEF'
      },
      {
        id: null,
        name: 'NMD R1',
        description: 'NMD R1',
        featuredImage: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8714e7e44a6f4a53b4b8abf4000bdf5f_9366/NMD_R1_Shoes_Burgundy_FY9390_06_standard.jpg',
        price: 140,
        photos: [
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/b24f434484d14627a556abf4000ad6ef_9366/NMD_R1_Shoes_Burgundy_FY9390_01_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/d22669ec01e54c71a592abf4000c6428_9366/NMD_R1_Shoes_Burgundy_FY9390_04_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/03e0d968b32742f286f9abf4000c02df_9366/NMD_R1_Shoes_Burgundy_FY9390_05_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8714e7e44a6f4a53b4b8abf4000bdf5f_9366/NMD_R1_Shoes_Burgundy_FY9390_06_standard.jpg'],
        backgroundColor: '#F9C9CE'
      },
      {
        id: null,
        name: 'Ultraboost 20',
        description: 'Ultraboost 20',
        featuredImage: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/8dddf27a4f474976a94cab6600ed7c8c_9366/Ultraboost_20_Shoes_Black_FV8322_06_standard.jpg',
        price: 180,
        photos: [
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/aedcf1f09e12477c9bc5ab6600ed7455_9366/Ultraboost_20_Shoes_Black_FV8322_01_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a2b6390c53c44df8b546ab6600ed910a_9366/Ultraboost_20_Shoes_Black_FV8322_04_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/acb98e7a1fdb47e0a0feab6600ed9810_9366/Ultraboost_20_Shoes_Black_FV8322_05_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/8dddf27a4f474976a94cab6600ed7c8c_9366/Ultraboost_20_Shoes_Black_FV8322_06_standard.jpg'
        ],
        backgroundColor: '#C79D82'
      },
      {
        id: null,
        name: 'Stan Smith',
        description: 'Stan Smith',
        featuredImage: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/578fc42585f84690a0f0a80e008188cf_9366/Stan_Smith_Shoes_White_M20324_06_standard.jpg',
        price: 89.99,
        photos: [
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/eb638fce8b4f4678b40aa80e00818f3a_9366/Stan_Smith_Shoes_White_M20324_04_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/8ce27a7891ad4a44b9f2a80e00819188_9366/Stan_Smith_Shoes_White_M20324_05_standard.jpg',
          'https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/578fc42585f84690a0f0a80e008188cf_9366/Stan_Smith_Shoes_White_M20324_06_standard.jpg'
        ],
        backgroundColor: '#EDEDEF'
      }
    ]
  }

  getShoes() {
    return this.shoes;
  }
}
