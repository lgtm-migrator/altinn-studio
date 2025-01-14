﻿using Altinn.Studio.DataModeling.Json.Keywords;
using DataModeling.Tests.Json.Keywords.BaseClasses;
using FluentAssertions;
using Xunit;

namespace DataModeling.Tests.Json.Keywords.FormatRange.Keyword;

public class FormatExclusiveMinimumKeywordTests: ValueKeywordTestsBase<FormatExclusiveMinimumKeywordTests, FormatExclusiveMinimumKeyword, string>
{
    protected override FormatExclusiveMinimumKeyword CreateKeywordWithValue(string value) => new(value);

    [Theory]
    [InlineData("2022-10-18")]
    public void CreatedKeyword_ShouldHaveValue(string value)
    {
        Keyword = new FormatExclusiveMinimumKeyword(value);
        Keyword.Value.Should().Be(value);
    }

    [Theory]
    [InlineData("2022-10-18")]
    public void SameKeywords_Should_BeEqual(string value)
    {
        var expectedKeyword = new FormatExclusiveMinimumKeyword(value);
        object expectedKeywordObject = new FormatExclusiveMinimumKeyword(value);

        Given.That.KeywordCreatedWithValue(value)
            .Then.KeywordShouldEqual(expectedKeyword)
            .And.KeywordShouldEqualObject(expectedKeywordObject)
            .But.KeywordShouldNotEqual(null);
    }

    [Theory]
    [InlineData("2022-10-18")]
    public void GetHashCode_ShouldBe_As_Value(string value)
    {
        var expectedHashCode = value.GetHashCode();
        Given.That.KeywordCreatedWithValue(value);
        expectedHashCode.GetHashCode().Should().Be(Keyword.GetHashCode());
    }
}
