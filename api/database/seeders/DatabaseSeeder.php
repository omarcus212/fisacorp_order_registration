<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use DB;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        DB::table('products')->insert([
            [
                'id' => 1,
                'name' => 'AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML',
                'price' => 20.49,
                'stock_quantity' => 2,
                'img' => 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/fisacorp%2Fazeite.jpg?alt=media&token=8d23eff0-02cc-4632-82ba-6794f99bf53f'
            ],
            [
                'id' => 2,
                'name' => 'BEBIDA ENERGÉTICA VIBE 2L',
                'price' => 8.99,
                'stock_quantity' => 659,
                'img' => 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/fisacorp%2Fenergeticojpg.jpg?alt=media&token=f2515e28-db92-4383-8166-6b6432f0b611'
            ],
            [
                'id' => 3,
                'name' => 'ENERGÉTICO RED BULL ENERGY DRINK 250ML',
                'price' => 7.29,
                'stock_quantity' => 909,
                'img' => ''
            ],
            [
                'id' => 4,
                'name' => 'ENERGÉTICO RED BULL ENERGY DRINK 355ML',
                'price' => 10.79,
                'stock_quantity' => 159,
                'img' => ''
            ],
            [
                'id' => 5,
                'name' => 'ENERGÉTICO RED BULL ENERGY DRINK SEM AÇÚCAR 250ML',
                'price' => 7.49,
                'stock_quantity' => 659,
                'img' => ''
            ],
            [
                'id' => 6,
                'name' => 'ÁGUA MINERAL BONAFONT SEM GÁS 1',
                'price' => 2.39,
                'stock_quantity' => 909,
                'img' => ''
            ],
            [
                'id' => 7,
                'name' => 'FILME DE PVC WYDA 28CMX15M',
                'price' => 3.99,
                'stock_quantity' => 160,
                'img' => ''
            ],
            [
                'id' => 8,
                'name' => 'FILME DE PVC PRATSY 15M',
                'price' => 4.39,
                'stock_quantity' => 410,
                'img' => ''
            ],
            [
                'id' => 9,
                'name' => 'ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7',
                'price' => 5.79,
                'stock_quantity' => 660,
                'img' => ''
            ],
            [
                'id' => 10,
                'name' => 'ÁGUA MINERAL SEM GÁS MINALBA 1',
                'price' => 2.29,
                'stock_quantity' => 910,
                'img' => ''
            ],
            [
                'id' => 11,
                'name' => 'GUARDANAPO GRAND HOTEL SCOTT 24X24CM C/ 50UN',
                'price' => 4.39,
                'stock_quantity' => 160,
                'img' => ''
            ],
            [
                'id' => 12,
                'name' => 'GUARDANAPO DIA A DIA SCOTT 24X22CM C/ 50UN',
                'price' => 2.59,
                'stock_quantity' => 411,
                'img' => ''
            ],
            [
                'id' => 13,
                'name' => 'GUARDANAPO FOLHA DUPLA SNOB 23',
                'price' => 4.25,
                'stock_quantity' => 411,
                'img' => ''
            ],
            [
                'id' => 14,
                'name' => 'GUARDANAPO FOLHA SIMPLES SNOB 24X22CM C/ 50UN',
                'price' => 2.19,
                'stock_quantity' => 661,
                'img' => ''
            ],
            [
                'id' => 15,
                'name' => 'PAPEL TOALHA SNOB C/ 2UN',
                'price' => 5.39,
                'stock_quantity' => 912,
                'img' => ''
            ],
            [
                'id' => 16,
                'name' => 'TOALHA DE PAPEL SCOTT DURAMAX C/ 1UN',
                'price' => 11.29,
                'stock_quantity' => 162,
                'img' => ''
            ],
            [
                'id' => 17,
                'name' => 'PRATO DESCARTÁVEL COPOBRAS 18CM',
                'price' => 1.99,
                'stock_quantity' => 163,
                'img' => ''
            ],
            [
                'id' => 18,
                'name' => 'PRATO DESCARTÁVEL COPOBRAS 15CM',
                'price' => 2.9,
                'stock_quantity' => 413,
                'img' => ''
            ],
            [
                'id' => 19,
                'name' => 'PRATO DESCARTÁVEL COPOBRAS 21CM',
                'price' => 3.79,
                'stock_quantity' => 913,
                'img' => ''
            ],
            [
                'id' => 20,
                'name' => 'COLHER DESCARTÁVEL MASTER PRAFESTA BRANCA C/ 50UN',
                'price' => 5.99,
                'stock_quantity' => 413,
                'img' => ''
            ],
            [
                'id' => 21,
                'name' => 'GARFO DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN',
                'price' => 7.49,
                'stock_quantity' => 914,
                'img' => ''
            ],
            [
                'id' => 22,
                'name' => 'FACA DESCARTÁVEL MASTER PRAFESTA CRYSTAL C/ 50UN',
                'price' => 8.99,
                'stock_quantity' => 3,
                'img' => ''
            ],
            [
                'id' => 23,
                'name' => 'SACO PARA LIXO DOVER ROLL SUPER FORTE AZUL 50L C/ 30UN',
                'price' => 42.9,
                'stock_quantity' => 915,
                'img' => ''
            ],
            [
                'id' => 24,
                'name' => 'PANO PARA LIMPEZA PERFEX C/ 5UN',
                'price' => 6.99,
                'stock_quantity' => 415,
                'img' => ''
            ],
            [
                'id' => 25,
                'name' => 'PANO PARA LIMPEZA ALKLIN C/ 5UN',
                'price' => 4.79,
                'stock_quantity' => 665,
                'img' => ''
            ],
            [
                'id' => 26,
                'name' => 'VELA SANTA CRUZ BRANCA C/8 25G',
                'price' => 5.89,
                'stock_quantity' => 915,
                'img' => ''
            ],
            [
                'id' => 27,
                'name' => 'VELA SANTA CRUZ C/8 30G',
                'price' => 6.89,
                'stock_quantity' => 416,
                'img' => ''
            ],
            [
                'id' => 28,
                'name' => 'BEBIDA DE SOJA SOYOS SÚFRESH LARANJA E CENOURA 1L',
                'price' => 4.99,
                'stock_quantity' => 666,
                'img' => ''
            ],
            [
                'id' => 29,
                'name' => 'BEBIDA A BASE DE SOJA ADES LARANJA 1L',
                'price' => 5.39,
                'stock_quantity' => 916,
                'img' => ''
            ],
            [
                'id' => 30,
                'name' => 'BEBIDA A BASE DE SOJA ADES MAÇÃ 1L',
                'price' => 5.59,
                'stock_quantity' => 166,
                'img' => ''
            ],
            [
                'id' => 31,
                'name' => 'BEBIDA À BASE DE SOJA ADES MAÇÃ ZERO 1L',
                'price' => 7.39,
                'stock_quantity' => 416,
                'img' => ''
            ],
            [
                'id' => 32,
                'name' => 'BEBIDA À BASE DE SOJA ADES LARANJA ZERO 1L',
                'price' => 7.39,
                'stock_quantity' => 667,
                'img' => ''
            ],
            [
                'id' => 33,
                'name' => 'CREME DE TRATAMENTO ELSEVE ULTRA LISO 300G',
                'price' => 16.99,
                'stock_quantity' => 417,
                'img' => ''
            ],
            [
                'id' => 34,
                'name' => 'CREME DE TRATAMENTO ELSEVE OLÉO EXTRAORDINÁRIO 300G',
                'price' => 18.99,
                'stock_quantity' => 667,
                'img' => ''
            ],
            [
                'id' => 35,
                'name' => 'DESODORANTE ROLL ON DOVE ORIGINAL 50ML',
                'price' => 10.49,
                'stock_quantity' => 669,
                'img' => ''
            ],
            [
                'id' => 36,
                'name' => 'DESODORANTE ROLL ON DOVE SENSITIVE SEM PERFUME 50ML',
                'price' => 10.74,
                'stock_quantity' => 919,
                'img' => ''
            ],
            [
                'id' => 37,
                'name' => 'DESODORANTE AEROSOL DOVE BEAUTY 150ML',
                'price' => 14.99,
                'stock_quantity' => 169,
                'img' => ''
            ],
            [
                'id' => 38,
                'name' => 'DESODORANTE AEROSOL DOVE PURE 100G',
                'price' => 13.19,
                'stock_quantity' => 419,
                'img' => ''
            ],
            [
                'id' => 39,
                'name' => 'REFRIGERANTE ANTARCTICA GUARANÁ 2L',
                'price' => 6.79,
                'stock_quantity' => 670,
                'img' => ''
            ],
            [
                'id' => 40,
                'name' => 'ÁGUA MINERAL SEM GÁS CRYSTAL GARRAFÃO 5L',
                'price' => 7.99,
                'stock_quantity' => 920,
                'img' => ''
            ],
            [
                'id' => 41,
                'name' => 'REFRIGERANTE H2OH! DE LIMÃO 500ML',
                'price' => 3.9,
                'stock_quantity' => 670,
                'img' => ''
            ],
            [
                'id' => 42,
                'name' => 'DESODORANTE AEROSOL NIVEA SENSITIVE SEM PERFUME 150ML',
                'price' => 11.99,
                'stock_quantity' => 171,
                'img' => ''
            ],
            [
                'id' => 43,
                'name' => 'REFRIGERANTE H2OH! LIMÃO 1',
                'price' => 6.99,
                'stock_quantity' => 921,
                'img' => ''
            ],
            [
                'id' => 44,
                'name' => 'DESODORANTE AEROSOL NIVEA BLACK&WHITE INVISIBLE MASCULINO 150ML',
                'price' => 11.99,
                'stock_quantity' => 171,
                'img' => ''
            ],
            [
                'id' => 45,
                'name' => 'ÁGUA MINERAL PRATA SEM GÁS 1',
                'price' => 3.9,
                'stock_quantity' => 172,
                'img' => ''
            ],
            [
                'id' => 46,
                'name' => 'NÉCTAR MAGUARY DE MARACUJÁ 1L',
                'price' => 4.49,
                'stock_quantity' => 672,
                'img' => ''
            ],
            [
                'id' => 47,
                'name' => 'REFRIGERANTE ANTARCTICA GUARANÁ ZERO 2L',
                'price' => 5.79,
                'stock_quantity' => 923,
                'img' => ''
            ],
            [
                'id' => 48,
                'name' => 'ÁGUA MINERAL SEM GÁS CRYSTAL PET 1',
                'price' => 2.59,
                'stock_quantity' => 173,
                'img' => ''
            ],
            [
                'id' => 49,
                'name' => 'ÁGUA MINERAL BONAFONT SEM GÁS 500ML',
                'price' => 1.75,
                'stock_quantity' => 423,
                'img' => ''
            ],
            [
                'id' => 50,
                'name' => 'DESODORANTE AEROSOL REXONA ANTIBACTERIANO + INVISIBLE PROTECTION FEMININO 150ML',
                'price' => 11.99,
                'stock_quantity' => 673,
                'img' => ''
            ]
        ]);
    }
}
