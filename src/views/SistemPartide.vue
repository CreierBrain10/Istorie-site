<script setup>
	import NavBar from "../components/NavBar.vue";
	const style = "border inset border-gray-800 bg-zinc-800 rounded-lg p-4 grid grid-cols-2 gap-24";
</script>
<template>
	<NavBar />
	<div
		class="grid place-items-center text-center place-self-center p-4 mt-20 max-w-4xl text-lg"
		style="grid-template-columns: auto auto"
	>
		<main style="cursor: default">
			<div :class="style">
				<p style="display: inline-block">
					<strong class="block mb-4 italic underline">1. Partidul Național Liberal(1922)</strong>Deviza ,,prin noi
					înșine" teoretizata de Vintilă Brătianu și de Ștefan Zelentin. Se urmărea sprijinirea capitalului autohton și
					limitarea pătrunderii celui străin în economia românească -se punea accentul pe dezvoltarea industriei.
				</p>
				<p>
					<strong class="block mb-4 italic underline">Programul Partidului Național Liberal (1922)</strong>Vom face o
					politică de dreptate socială, asigurândd astfel democrației sănătoase linișstea pentru a dezvolta roadele
					dobândite prin sufragiul universal. Vom urma o politică de sporire a producției și de înlesnire a exportului
					ei. (...) Vom asigura tuturor cetățenilor României Mari, de orice rasă, limbă, confesiune ar fi ei, drepturile
					culturale și religioase ce li se cuvin.
				</p>
			</div>
			<div :class="style">
				<p>
					<strong class="block mb-4 italic underline">2. Partidul Național Țărănesc(1935)</strong> format în 1926 prin
					fuziunea Partidului Țărănesc -înființat în 1918 de Ion Mihalache -condus de Iuliu Maniu ajuns la guvernare în
					1928 - a pus în practică până în 1931 politica economică a ,,porților deschise", care exprima convingerea că
					dezvoltarea adecvată a țării nu poate fi susținută doar de capitalul autohton, fiind necesară atragerea
					invențiilor de capital din străinătate. Se pune accentul pe agricultură și pe acele ramuri industriale care
					aveau o bază de materii prime în țară.
				</p>
				<p>
					<strong class="block mb-4 italic underline">Programul Partidului Național Țărănesc</strong>Înțelegând să apere
					drepturile și libertățile cetățenești, P.N.Ț. socoate necesar să accentueze îndatorirea fiecăruia de a se
					încadra solidar și conștient în acțiunea statului. Munca și proprietatea vor fi garantate, recunoscându-se
					statului dreptul să promoveze interesul general (...) și să intervină pentru armonizarea intereselor
					particulare. (...) Dreptul de vot al femeilor va fi extins.
				</p>
			</div>
			<div :class="style">
				<p>
					<strong class="block mb-4 italic underline">3. Partidul Comunist Român</strong> a fost întemeiat în 1921.
					Primul secretar general a fost Gheoghe Cristescu(1921-1924), iar ultimul a fost Nicolae Ceaușescu(1965-1989).
					Partidul a avut o poziție politică extremă stângă.
				</p>
				<p>
					<strong class="block mb-4 italic underline">Rezolutia Congresului al III-lea al P.C.R (1924)</strong>România
					capitalistă, prin rezultatele războiului imperialist mondial, (...) și-a supus însemnate părți din națiuni
					dezvoltate politicește, economicește și culturalicește și, in felul acesta, din stat național a devenit stat
					de naționalități. (...) Partidul Comunist trebuie să lupte cu hotărâre împotriva anexării violente a
					Basarabiei, Bucovinei, Transilvaniei și Dobrogei și să sprijine în chip practic lupta pentru eliberarea și
					independența națională.
				</p>
			</div>
			<div :class="style">
				<p>
					<strong class="block mb-4 italic underline">4. Legiunea Arhanghelului Mihail</strong> a tost o mișcare
					legionară ce a fost începută în 1927 de Corneliu Zelea Codreanu, avînd poziția politică extremă dreaptă.
					Membrii purtau uniforme verzi, pentru care au fost numiți ,,legionari" sau ,,cămăși verzi" dominarea
					Căpitanului era absolută, iar criticarea sa era posibilă cu moartea.
				</p>
				<p>
					<strong class="block mb-4 italic underline">Corneliu Zelea-Codreanu, despre democrație (1936)</strong
					>Democrația este în slujba marii finanțe. Din cauza sistemului costisitor și a concurenței dintre diferitele
					grupări, democrația care să fie alimentată cu bani mulți. (...) Mulțimile, fiind chemate să-și aleaga elita,
					acestea nu numai că sunt în stare să-și descopere și să-și aleaga elita dar, mai mult, aleg, afară de mici
					excepții, tot ce este mai rău în sânul unei națiuni
				</p>
			</div>
		</main>
	</div>
</template>
<style scoped>
	div + div {
		margin-top: 22px;
	}
</style>
