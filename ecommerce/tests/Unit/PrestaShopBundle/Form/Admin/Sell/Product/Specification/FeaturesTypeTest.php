<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

declare(strict_types=1);

namespace Tests\Unit\PrestaShopBundle\Form\Admin\Sell\Product\Specification;

use PHPUnit\Framework\TestCase;
use PrestaShopBundle\Form\Admin\Sell\Product\Specification\FeaturesType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class FeaturesTypeTest extends TestCase
{
    /**
     * @dataProvider providerBuildForm
     *
     * @param array $expectedChildren
     *
     * @return void
     */
    public function testBuildForm(array $expectedChildren): void
    {
        $mockTranslatorInterface = $this
            ->getMockBuilder(TranslatorInterface::class)
            ->getMock();
        $mockFormBuilder = $this
            ->getMockBuilder(FormBuilderInterface::class)
            ->disableOriginalConstructor()
            ->getMock();

        $children = [];

        $mockFormBuilder->method('add')->willReturnCallback(function (string $child) use (&$children, $mockFormBuilder) {
            $children[] = $child;

            return $mockFormBuilder;
        });
        $mockFormBuilder->method('all')->willReturnCallback(function () use (&$children) {
            return $children;
        });

        $formType = new FeaturesType($mockTranslatorInterface, []);
        $formType->buildForm($mockFormBuilder, []);

        $this->assertEquals($expectedChildren, $mockFormBuilder->all());
    }

    /**
     * @return array<array<bool|array<string>>>
     */
    public function providerBuildForm(): array
    {
        return [
            [
                [
                    'feature_values',
                    'add_feature',
                ],
            ],
        ];
    }
}
