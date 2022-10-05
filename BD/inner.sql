select tb_produtos.nome, tb_produtos.preco, tb_marcas.nome from tb_produtos
	inner join tb_marcas on tb_marcas.id = tb_produtos.id_marcas;


select tb_produtos.nome, tb_produtos.preco, tb_marcas.nome from tb_produtos
	inner join tb_marcas on tb_marcas.id = tb_produtos.id_marcas;

select tb_produtos.nome, tb_produtos.preco, tb_marcas.nome from tb_produtos
	inner join tb_marcas on tb_marcas.id = tb_produtos.id_marcas
		where tb_marcas.nome like "%as%" and tb_produtos.preco > 50;
        
/*Utilização do Inner Join */